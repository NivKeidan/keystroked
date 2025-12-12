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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
