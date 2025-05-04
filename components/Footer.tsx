import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-backgroung p-4">
      <div className="relative w-full max-w-[2560px] mx-auto h-9 flex items-center">
        <div className="absolute left-1/2 -translate-x-1/2">
          <p className="text-sm text-black/70 dark:text-white/70">
          &copy; {currentYear} Carmine Potirniche. All rights reserved.
        </p>
        </div>
        <div className="flex justify-end w-full px-4">
            <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/in/carmineap" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/potirniche-carmine" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <Github className="h-5 w-5" />
                </a>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                <a href="mailto:potirnichecarmine@gmail.com" aria-label="Email Carmine">
                    <Mail className="h-5 w-5" />
                </a>
            </Button>
        </div>
      </div>
    </footer>
  );
}