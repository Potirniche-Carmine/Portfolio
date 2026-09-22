"""Build the resume with the supplied LaTeX format and require one Letter page."""
from pathlib import Path
import argparse
import json
import re
import shutil
import subprocess

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
STEM = "Carmine-Potirniche-Resume"


def tex(value):
    value = value.replace("<b>", "\x01").replace("</b>", "\x02")
    escapes = {
        "\\": r"\textbackslash{}", "&": r"\&", "%": r"\%", "$": r"\$",
        "#": r"\#", "_": r"\_", "{": r"\{", "}": r"\}",
        "~": r"\textasciitilde{}", "^": r"\textasciicircum{}",
        "|": "$|$",
    }
    value = "".join(escapes.get(char, char) for char in value)
    return value.replace("\x01", r"\textbf{").replace("\x02", "}")


def date(value):
    return tex(value.replace(" - ", " -- "))


def create_source(data):
    lines = []
    for heading, key in [("Experience", "experience"), ("Projects", "projects")]:
        lines.extend([r"\section{" + heading + "}", r"\resumeSubHeadingListStart"])
        for row in data[key]:
            if key == "experience":
                lines.extend([
                    r"  \resumeSubheading",
                    "    {" + tex(row["name"]) + "}{" + tex(row["location"]) + "}",
                    "    {" + tex(row["role"]) + "}{" + date(row["dates"]) + "}",
                ])
            else:
                lines.extend([
                    r"  \resumeProjectHeading",
                    r"    {\textbf{" + tex(row["name"]) + r"} $|$ \emph{"
                    + tex(row["role"]) + "}}{" + date(row["dates"]) + "}",
                ])
            lines.append(r"    \resumeItemListStart")
            lines.extend(r"      \resumeItem{" + tex(bullet) + "}" for bullet in row["bullets"])
            lines.append(r"    \resumeItemListEnd")
        lines.extend([r"\resumeSubHeadingListEnd", ""])

    edu = data["education"]
    lines.extend([
        r"\section{Education}", r"\resumeSubHeadingListStart", r"  \resumeSubheading",
        "    {" + tex(edu["name"]) + "}{" + tex(edu["location"]) + "}",
        "    {" + tex(edu["degree"]) + "}{" + tex(edu["date"]) + "}",
        r"\resumeSubHeadingListEnd", "", r"\section{Technical Skills}",
        r"\begin{itemize}[leftmargin=0.15in, label={}, topsep=0pt, itemsep=0pt, parsep=0pt, partopsep=0pt]",
        r"  \normalsize\item{",
    ])
    for index, (label, value) in enumerate(data["skills"]):
        ending = r" \\" if index < len(data["skills"]) - 1 else ""
        lines.append(r"    \textbf{" + tex(label) + ":} " + tex(value) + ending)
    lines.extend(["  }", r"\end{itemize}"])
    template = (ROOT / "resume/template.tex").read_text(encoding="utf-8")
    assert template.count("%% RESUME_CONTENT %%") == 1
    return template.replace("%% RESUME_CONTENT %%", "\n".join(lines))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--engine", help="Path to tectonic or pdflatex")
    args = parser.parse_args()
    local = ROOT / ".local/resume-tools/tectonic/tectonic.exe"
    engine = args.engine or shutil.which("tectonic") or shutil.which("pdflatex")
    if not engine and local.is_file():
        engine = str(local)
    if not engine:
        parser.error("Install Tectonic or pdfLaTeX, or pass --engine PATH.")
    engine = str(Path(engine).resolve())

    data = json.loads((ROOT / "resume/content.json").read_text(encoding="utf-8"))
    source = ROOT / "resume" / (STEM + ".tex")
    source.write_text(create_source(data), encoding="utf-8")
    build = ROOT / ".local/resume-build"
    build.mkdir(parents=True, exist_ok=True)
    if "tectonic" in Path(engine).name.lower():
        command = [engine, "--untrusted", "--keep-logs", "--outdir", str(build), str(source)]
        subprocess.run(command, cwd=ROOT, check=True)
    else:
        command = [engine, "-no-shell-escape", "-interaction=nonstopmode", "-halt-on-error",
                   "-output-directory=" + str(build), str(source)]
        for _ in range(2):
            subprocess.run(command, cwd=ROOT, check=True)

    log = (build / (STEM + ".log")).read_text(encoding="utf-8", errors="replace")
    if re.search(r"Overfull \\[hv]box", log):
        raise RuntimeError("LaTeX reports overflow. Shorten the content before delivery.")
    pdf = build / (STEM + ".pdf")
    reader = PdfReader(pdf)
    if len(reader.pages) != 1:
        raise RuntimeError(f"Resume has {len(reader.pages)} pages; one page is required.")
    page = reader.pages[0]
    if abs(float(page.mediabox.width) - 612) > 0.1 or abs(float(page.mediabox.height) - 792) > 0.1:
        raise RuntimeError("Resume page size must be US Letter.")
    text = page.extract_text()
    for required in [data["name"], "Experience", "Projects", "Education", "Technical Skills"]:
        if required.replace(" ", "").lower() not in text.replace(" ", "").lower():
            raise RuntimeError(f"Missing extractable text: {required}")
    output = ROOT / "output/pdf" / (STEM + ".pdf")
    output.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(pdf, output)
    shutil.copyfile(pdf, source.with_suffix(".pdf"))
    print(f"Created one US Letter page: {output}")


if __name__ == "__main__":
    main()
