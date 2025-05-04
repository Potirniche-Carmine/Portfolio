import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail} from "lucide-react";

const projects = [
 {
    title: "CivicNest - Senior Project",
    description: "Revolutionizing property investment decisions with comprehensive neighborhood analytics, economic indicators, AI-generated insights, and interactive mapping focused initially on Reno, NV.",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Mapbox GL JS", "Python", "Scikit-learn", "Gemini AI", "PostgreSQL", "Clerk Auth", "Heroku"],
    githubUrl: "https://github.com/Potirniche-Carmine/CivicNest",
    liveUrl: "https://civicnest.carmine.live/",
    imageUrl: "/civicnest-page.png", 
  },
  {
    title: "InvoiceSync",
    description: "A full-stack invoicing and quote management platform tailored for locksmith businesses, featuring VIN decoding, PDF generation, customer management, and secure authentication.",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "PostgreSQL", "Docker", "Linux", "CI/CD", "AWS S3", "NextAuth.js", "Puppeteer"],
    githubUrl: "https://github.com/Potirniche-Carmine/InvoiceSync",
    videoUrl: "https://www.youtube.com/embed/noBHiKxODVY?si=rdtNLtBgRFAWW-lW",
    imageUrl: "/invoicesync-page.png",
  },
   {
    title: "Locksmith Business Website",
    description: "Developed a professional, client-focused website for Locksmith4U Vegas. Showcases ability to build effective online presences tailored to local business needs and enhance customer engagement.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Client-Focused Design"],
    liveUrl: "https://locksmith4uvegas.com/",
    imageUrl: "/locksmith4u-page.png", 
  },
];

const skills = {
    languages: ["C++", "C", "C#", "Python", "SQL", "Typescript", "R", "MATLAB"],
    dataViz: ["Power BI", "Tableau", "Microsoft Excel"],
    development: ["Linux", "Git", "Docker", "REST APIs", "Next.js", "React", "Node.js", "Unity"],
    other: ["SOLIDWORKS (CSWA Certified)"]
};


export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      <section id="hero" className="text-center pt-12 md:pt-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Carmine Potirniche
        </h1>
        <p className="mt-3 text-lg text-muted-foreground sm:mt-4 sm:text-xl md:text-2xl">
        Software Engineer | Data Science & Statistics
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
           <Button asChild size="lg">
                <a href="https://linkedin.com/in/carmineap" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                </a>
            </Button>
            <Button variant="secondary" asChild size="lg">
                <a href="https://github.com/potirniche-carmine" target="_blank" rel="noopener noreferrer">
                     <Github className="mr-2 h-5 w-5" /> GitHub
                </a>
            </Button>
            <Button variant="secondary" asChild size="lg">
                <a href="mailto:potirnichecarmine@gmail.com">
                    <Mail className="mr-2 h-5 w-5" /> Email Me
                </a>
            </Button>
        </div>
      </section>

      <Separator />

      <section id="about" className="scroll-mt-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">About Me</h2>
        <div className="space-y-4 text-muted-foreground">
            <p>
                I'm a recent graduate from the University of Nevada, Reno (UNR) with a Bachelor of Science in Computer Science and Engineering and a Minor in Statistics (May 2025). I am passionate about leveraging technology to solve real-world problems and am currently pursuing a Master of Science in Statistics and Data Science at UNR (Expected Spring 2027).
            </p>
            <p>
                My academic journey included a valuable student exchange experience in Plzen, Czechia, focusing on Numerical Methods and Computer Graphics. I've gained practical research experience as an Undergraduate Research Assistant at UNR's Software Systems Lab, contributing to data analysis and visualization projects using Python and Power BI.
            </p>
             <p>
                I have a strong foundation in software development, data structures, algorithms, and data analysis. I enjoy building full-stack web applications, particularly with Next.js and React, and I'm adept at creating efficient backend systems and databases. I'm actively seeking software development roles and opportunities to build impactful web solutions for clients, including local businesses.
            </p>
        </div>
      </section>

       <Separator />

       <section id="projects" className="scroll-mt-20">
         <h2 className="text-3xl font-semibold tracking-tight mb-6">Projects</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {projects.map((project) => (
             <ProjectCard
               key={project.title}
               {...project}
             />
           ))}
         </div>
       </section>

       <Separator />

      <section id="skills" className="scroll-mt-20">
         <h2 className="text-3xl font-semibold tracking-tight mb-6">Technical Skills</h2>
         <div className="space-y-5">
            <div>
                <h3 className="text-lg font-medium mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.languages.map(skill => <Badge key={skill}>{skill}</Badge>)}
                </div>
            </div>
             <div>
                <h3 className="text-lg font-medium mb-2">Data Visualization</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.dataViz.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                </div>
            </div>
             <div>
                <h3 className="text-lg font-medium mb-2">Development & Tools</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.development.map(skill => <Badge key={skill} variant="outline">{skill}</Badge>)}
                </div>
            </div>
             <div>
                <h3 className="text-lg font-medium mb-2">Other</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.other.map(skill => <Badge key={skill} variant="default">{skill}</Badge>)}
                </div>
            </div>
         </div>
      </section>

    </div>
  );
}