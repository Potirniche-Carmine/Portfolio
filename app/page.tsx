import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProjectCard from "@/components/ProjectCard"; 
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Briefcase, Users, MessageSquareHeart, Server, Palette, Code2 } from "lucide-react"; 

const projects = [
  {
    title: "Locksmith Business Website - Locksmith4U",
    serviceProvided: "Custom Website Development for Local Business",
    description: "Developed a professional, client-focused website for Locksmith4U, designed to improve online visibility, streamline service inquiries, and enhance customer engagement within the local market. This project showcases my ability to deliver effective online presences tailored to local business needs.",
    techStack: ["Next.js", "React", "Tailwind CSS", "Client-Focused Design", "SEO Basics"],
    liveUrl: "https://locksmith4uvegas.com/",
    imageUrl: "/locksmith4u-page.png",
  },
  {
    title: "CivicNest - Senior Project",
    serviceProvided: "Full-Stack Data Platform Development (University Capstone)",
    description: "Revolutionized property investment decisions with comprehensive neighborhood analytics, economic indicators, AI-generated insights, and interactive mapping. This project demonstrates advanced full-stack capabilities, data visualization, and AI integration, applicable to complex business web applications.",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "Mapbox GL JS", "Python", "Scikit-learn", "Gemini AI", "PostgreSQL", "Clerk Auth", "Heroku"],
    githubUrl: "https://github.com/Potirniche-Carmine/CivicNest",
    liveUrl: "https://civicnest.carmine.live/",
    imageUrl: "/civicnest-page.png",
  },
  {
    title: "InvoiceSync",
    serviceProvided: "Full-Stack Business Tool Development",
    description: "A full-stack invoicing and quote management platform tailored for service businesses, featuring VIN decoding, PDF generation, customer management, and secure authentication. Highlights expertise in building robust backend systems and practical business solutions.",
    techStack: ["Next.js", "React", "Typescript", "Tailwind CSS", "PostgreSQL", "Docker", "Linux", "CI/CD", "AWS S3", "NextAuth.js", "Puppeteer"],
    githubUrl: "https://github.com/Potirniche-Carmine/InvoiceSync",
    videoUrl: "https://www.youtube.com/embed/noBHiKxODVY?si=rdtNLtBgRFAWW-lW",
    imageUrl: "/invoicesync-page.png",
  },
];

const skills = {
  languages: ["C++", "C", "C#", "Python", "SQL", "Typescript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  dataViz: ["Power BI", "Tableau", "Microsoft Excel", "Chart.js"],
  development: ["Linux", "Git", "Docker", "REST APIs", "Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Unity"],
  other: ["SOLIDWORKS (CSWA Certified)", "Agile Methodologies", "Problem Solving"]
};

const services = [
    {
        icon: <Code2 className="h-10 w-10 mb-3 text-primary" />,
        title: "Custom Website Design & Development",
        description: "I design and build professional, mobile-responsive websites from scratch, tailored to your unique brand and business requirements. Every website is crafted to be fast, secure, and search-engine friendly using modern technologies like Next.js and React."
    },
    {
        icon: <Palette className="h-10 w-10 mb-3 text-primary" />,
        title: "Website Redesign & Modernization",
        description: "If your current website feels outdated or isn't performing, I can redesign it to meet current standards, improve user experience, and better reflect your brand, ensuring it's an asset that drives growth."
    },
    {
        icon: <Server className="h-10 w-10 mb-3 text-primary" />,
        title: "Full-Stack Web Applications",
        description: "Leveraging my expertise in both front-end and back-end development, I can build complex web applications with custom features, database integrations, and robust server-side logic to meet specific business process needs."
    },
];


export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-20 lg:space-y-24"> 
      <section id="hero" className="text-center pt-12 md:pt-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Carmine Potirniche
        </h1>
        <p className="mt-3 text-lg text-muted-foreground sm:mt-4 sm:text-xl md:text-2xl max-w-3xl mx-auto">
          Professional Website Design & Development for Local Businesses <br className="hidden sm:block" />
          <span className="text-base sm:text-lg md:text-xl text-gray-500 dark:text-gray-400">Software Engineer & Data Scientist</span></p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
                <a href="#contact">
                    <MessageSquareHeart className="mr-2 h-5 w-5" /> Get a Free Quote
                </a>
            </Button>
            <Button variant="secondary" asChild size="lg">
                <a href="#services">
                    <Briefcase className="mr-2 h-5 w-5" /> View My Services
                </a>
            </Button>
        </div>
        <div className="mt-6 flex gap-3 justify-center">
            <Button variant="outline" size="sm" asChild className="text-muted-foreground hover:text-primary">
                <a href="https://linkedin.com/in/carmineap" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
            </Button>
            <Button variant="outline" size="sm" asChild className="text-muted-foreground hover:text-primary">
                <a href="https://github.com/potirniche-carmine" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
            </Button>
        </div>
      </section>

      <Separator />

      <section id="about" className="scroll-mt-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-6 text-center md:text-left">About Me</h2>
        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
                Hi, I'm Carmine Potirniche, a dedicated software engineer and web developer based in Reno, Nevada. I specialize in creating impactful, high-performance websites and web applications for local businesses and clients seeking robust digital solutions. My mission is to leverage modern technology and user-centric design principles to help your business establish a strong online presence, attract more customers, and achieve its digital goals.
            </p>
            <p>
                I am a proud graduate from the University of Nevada, Reno (UNR) with a Bachelor of Science in Computer Science and Engineering and a Minor in Statistics (May 2025). I am currently advancing my expertise by pursuing a Master of Science in Statistics and Data Science at UNR (Expected Spring 2027). My academic journey included a valuable student exchange in Plzen, Czechia, and practical research experience at UNR's Software Systems Lab.
            </p>
            <p>
                With a strong foundation in full-stack development using technologies like Next.js, React, TypeScript, and PostgreSQL, I build responsive, scalable, and user-friendly web solutions. I developed a client-focused website for <a href="https://locksmith4uvegas.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Locksmith4U</a>, enhancing their customer engagement, and I'm passionate about partnering with other local businesses to provide tailored web services.
            </p>
        </div>
      </section>

      <Separator />

      <section id="services" className="scroll-mt-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Web Development Services I Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-card">
              <div className="flex justify-center md:justify-start">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-2 mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground">
            My core technologies include: Next.js, React, TypeScript, Node.js, Tailwind CSS, and PostgreSQL.
        </p>
      </section>

      <Separator />

      <section id="portfolio" className="scroll-mt-20"> {/* Changed ID and Title */}
        <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">My Portfolio & Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project} // Pass all project props, including serviceProvided
            />
          ))}
        </div>
      </section>

      <Separator />
      <section id="skills" className="scroll-mt-20">
        <h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Technical Skills & Expertise</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl font-medium mb-3 text-center md:text-left">Programming Languages</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.languages.map(skill => <Badge key={skill} variant="default" className="text-sm px-3 py-1">{skill}</Badge>)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3 text-center md:text-left">Development, Tools & Frameworks</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.development.map(skill => <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3 text-center md:text-left">Data Visualization & Analysis</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.dataViz.map(skill => <Badge key={skill} variant="outline" className="text-sm px-3 py-1">{skill}</Badge>)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-3 text-center md:text-left">Other Professional Skills</h3>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.other.map(skill => <Badge key={skill} variant="default" className="text-sm px-3 py-1 bg-green-700 hover:bg-green-800 text-white">{skill}</Badge>)}
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section id="contact" className="scroll-mt-20 text-center py-12 md:py-16 bg-secondary/20 rounded-lg">
        <h2 className="text-3xl font-semibold tracking-tight mb-4">Let's Build Your Business's New Website</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to discuss your web development needs? I offer a free, no-obligation consultation to explore how a custom website can benefit your business. Reach out today to get started!
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="mailto:potirnichecarmine@gmail.com">
                <Mail className="mr-2 h-5 w-5" /> Email Me for a Consultation
            </a>
        </Button>
        <p className="mt-6 text-sm text-muted-foreground">
            Carmine Potirniche | Web Design & Development Services
        </p>
      </section>

    </div>
  );
}