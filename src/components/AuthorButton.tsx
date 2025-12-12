import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AuthorButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 font-mono shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105 cursor-pointer rounded-full w-24 h-24 p-2 flex items-center justify-center text-center whitespace-normal break-words"
          size="lg"
        >
          Who's behind this?
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-border bg-background">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl flex items-center gap-2">
            <span className="text-primary">~/</span>about_me
          </DialogTitle>
          <DialogDescription className="sr-only">
            Information about the author and developer behind this blog
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          {/* Terminal-style intro */}
          <div className="terminal-box p-4">
            <pre className="font-mono text-xs text-primary leading-relaxed">
{`╭──────────────────────────╮
  │   SENIOR SOFTWARE DEV     │
  │   8+ YEARS EXPERIENCE     │
  ╰──────────────────────────╯`}
            </pre>
          </div>

          <div className="space-y-3">
            <p className="text-muted-foreground leading-relaxed text-sm">
              Hey there! I'm Niv, a Senior Software Developer with 8+ years building scalable 
              systems, distributed infrastructure, and AI-powered solutions.
            </p>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">Available for:</p>
              <ul className="space-y-1.5 text-xs">
                <li className="flex items-start gap-2 text-foreground">
                  <span className="text-primary font-mono">→</span>
                  <span>End-to-end projects, team augmentation (mentoring, deep tech guidance), or specialized integrations</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-foreground">Tech stack:</p>
              <p className="text-xs text-muted-foreground">
                Golang, Python, TypeScript • Backend architecture • AI/ML workflows • 
                Kubernetes, AWS, CI/CD • Full-stack (React, Angular, Svelte)
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed text-xs">
              Freelance & contract work available — locally in Israel and internationally.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button className="flex-1 font-mono gap-2" asChild>
              <a href="mailto:nivkeidan@gmail.com">
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </Button>
            <Button variant="outline" className="flex-1 font-mono gap-2" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" className="flex-1 font-mono gap-2" asChild>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthorButton;
