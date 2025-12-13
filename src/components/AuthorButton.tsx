import { useState } from "react";
import { User, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { trackEvent } from "@/lib/analytics";

const services = [
  {
    title: "PoC",
    description: "Work directly with founders, understand the core idea, and build a working first version in weeks to validate, pitch to investors, or just move fast",
  },
  {
    title: "E2E",
    description: "End-to-end projects — from architecture to deployment",
  },
  {
    title: "Team+",
    description: "Team augmentation — deep tech guidance, mentoring, or multiplying dev power",
  },
  {
    title: "AI",
    description: "Agentic systems, RAG, prompt engineering",
  },
  {
    title: "Bash",
    description: "I just like bash",
  },
];

const TagsView = ({ services }: { services: { title: string; description: string }[] }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap gap-2 justify-start">
        {services.map((service, i) => (
          <button
            key={service.title}
            onClick={() => {
              setSelectedIndex(i);
              trackEvent("about_me_tag_click", {
                tag: service.title.toLowerCase(),
              });
            }}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
              selectedIndex === i
                ? "bg-primary text-primary-foreground border border-primary"
                : "bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50"
            }`}
          >
            #{service.title.toLowerCase()}
          </button>
        ))}
      </div>
      <div className="relative min-h-16">
        {services.map((service, i) => (
          <p 
            key={service.title}
            className={`text-sm text-muted-foreground transition-opacity duration-200 ${
              selectedIndex === i ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            {service.description}
          </p>
        ))}
      </div>
    </div>
  );
};

const AuthorButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="fixed bottom-6 right-6 z-50 font-mono gap-2 shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
          size="lg"
          onClick={() => {
            trackEvent("whos_behind_this_click", {
              page: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
            });
          }}
        >
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Who's behind this?</span>
          <span className="sm:hidden">About</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md border-border bg-background">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Hey, I'm Niv 👋
          </DialogTitle>
          <DialogDescription>
            Learn more about the author behind this blog
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-5 py-2">
          {/* Intro section */}
          <div className="flex items-center gap-4">
            {/* Profile picture */}
            <div className="w-20 h-20 rounded-full border-2 border-forest overflow-hidden shrink-0">
              <img 
                src="/profile_pic.jpeg" 
                alt="Niv Keidan" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Friendly intro */}
            <div className="flex-1">
              <p className="text-muted-foreground text-sm leading-relaxed">
                I'm a software developer who loves building things that work. Based in Israel, working with teams worldwide.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-foreground">
                Some things I enjoy working on:
              </p>
            </div>
            
            <TagsView services={services} />
          </div>

          {/* Friendly CTA */}
          <div className="flex items-center gap-3 pt-1">
            <Button variant="outline" className="flex-1 gap-2 border-primary text-primary hover:bg-primary hover:text-background hover:border-primary" asChild>
              <a 
                href="mailto:nivkeidan@gmail.com"
                onClick={() => {
                  trackEvent("about_me_say_hello_click");
                }}
              >
                <Mail className="w-4 h-4" />
                Say hello
              </a>
            </Button>
            <Button variant="outline" size="icon" className="shrink-0 border-border hover:border-primary hover:bg-primary" asChild>
              <a 
                href="https://github.com/nivkeidan" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="GitHub"
                onClick={() => {
                  trackEvent("about_me_github_click");
                }}
              >
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="icon" className="shrink-0 border-border hover:border-primary hover:bg-primary" asChild>
              <a 
                href="https://linkedin.com/in/nivkeidan" 
                target="_blank" 
                rel="noopener noreferrer" 
                title="LinkedIn"
                onClick={() => {
                  trackEvent("about_me_linkedin_click");
                }}
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthorButton;
