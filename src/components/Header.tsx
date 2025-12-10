import { Terminal } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 2xl:w-[1400px]">
        <nav className="flex items-center">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 group-hover:border-primary transition-colors duration-300">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="font-mono text-xl font-semibold text-foreground">
              dev<span className="text-primary">_</span>log
              <span className="cursor-blink text-primary">▋</span>
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
