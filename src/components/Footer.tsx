import { Github, Twitter, Rss } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-6 py-12 2xl:w-[1400px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <span className="font-mono text-lg font-semibold text-foreground">
              dev<span className="text-primary">_</span>log
            </span>
            <p className="text-sm text-muted-foreground mt-1 font-mono">
              $ echo "Building in public"
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="RSS Feed"
            >
              <Rss className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} • Made with{" "}
            <span className="text-primary">♥</span> and caffeine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
