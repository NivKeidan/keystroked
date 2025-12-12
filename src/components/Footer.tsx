const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-6 py-12 2xl:w-[1400px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <span className="font-mono text-lg font-semibold text-foreground">
              keystroked
            </span>
            <p className="text-sm text-muted-foreground mt-1 font-mono">
              All content is written by humans, not AI.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
