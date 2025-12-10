interface AsciiArtProps {
  art: string;
  className?: string;
}

const AsciiArt = ({ art, className = "" }: AsciiArtProps) => {
  return (
    <div className={`ascii-container p-4 bg-secondary/50 rounded-lg overflow-hidden ${className}`}>
      <pre className="text-primary/80 group-hover:text-primary transition-colors duration-300">
        {art}
      </pre>
    </div>
  );
};

export default AsciiArt;
