"""Draw a split-square mark as SVG and a crisp PNG fallback."""
from pathlib import Path
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[1]
INK, PAPER = "#111214", "#f1f2f4"
# Two solid facets divided by a broad diagonal cut, legible at 16 px.
FACETS = [((4, 4), (28, 4), (4, 22)),
          ((28, 10), (28, 28), (4, 28))]


def raster(size):
    scale = size * 8 / 32
    image = Image.new("RGBA", (size * 8, size * 8))
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((0, 0, size * 8 - 1, size * 8 - 1),
                           radius=4 * scale, fill=INK)
    for facet in FACETS:
        draw.polygon([(x * scale, y * scale) for x, y in facet], fill=PAPER)
    return image.resize((size, size), Image.Resampling.LANCZOS)


polygons = "\n".join('    <polygon points="' + ' '.join(f'{x},{y}' for x,y in facet) + '"/>'
                     for facet in FACETS)
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <title>Carmine Potirniche</title>
  <style>
    .tile {{ fill: {INK}; }}
    .mark {{ fill: {PAPER}; }}
    @media (prefers-color-scheme: dark) {{
      .tile {{ fill: {PAPER}; }}
      .mark {{ fill: {INK}; }}
    }}
  </style>
  <rect class="tile" width="32" height="32" rx="4"/>
  <g class="mark">
{polygons}
  </g>
</svg>
'''
(ROOT / "assets/favicon.svg").write_text(svg)
raster(32).save(ROOT / "assets/favicon-32.png", optimize=True)

# Review the actual raster at tab size alongside an enlarged version.
preview = Image.new("RGB", (480, 160), "#e8e9eb")
for size, x in [(96, 32), (32, 224), (16, 328)]:
    mark = raster(size)
    preview.paste(mark, (x, (160-size)//2), mark)
preview.save(ROOT / "output/favicon-preview.png", optimize=True)
print("Created the split-square favicon, 32 px fallback, and size review.")
