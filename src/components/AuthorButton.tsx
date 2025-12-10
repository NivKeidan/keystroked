import { User, Mail, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AuthorButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 font-mono gap-2 shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          size="lg"
        >
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Who's behind this?</span>
          <span className="sm:hidden">About</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-border bg-background">
        <DialogHeader>
          <DialogTitle className="font-mono text-xl flex items-center gap-2">
            <span className="text-primary">~/</span>about_me
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Terminal-style intro */}
          <div className="terminal-box p-4">
            <pre className="font-mono text-xs text-primary leading-relaxed">
{`  ╭──────────────────────────╮
  │   FREELANCE DEVELOPER   │
  │   & SOFTWARE ARCHITECT  │
  ╰──────────────────────────╯`}
            </pre>
          </div>

          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hey there! I'm a freelance developer passionate about building 
              clean, performant, and user-friendly software. I specialize in:
            </p>

            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary font-mono">→</span>
                Full-stack web development
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary font-mono">→</span>
                API design & architecture
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary font-mono">→</span>
                React & TypeScript applications
              </li>
              <li className="flex items-center gap-2 text-foreground">
                <span className="text-primary font-mono">→</span>
                Technical consulting
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed text-sm">
              Looking for someone to bring your ideas to life? Let's build something great together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button className="flex-1 font-mono gap-2" asChild>
              <a href="mailto:hello@example.com">
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
          </div>

          <div className="pt-2 border-t border-border">
            <a 
              href="#" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
            >
              <ExternalLink className="w-3 h-3" />
              View full portfolio
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthorButton;
