interface AsciiArtProps {
  art: string;
  size?: "sm" | "base" | "lg";
}

const AsciiArt = ({ art, size = "base" }: AsciiArtProps) => {
  const sizeClasses = {
    sm: "text-[8px] leading-[10px] p-2",
    base: "text-[10px] leading-[12px] p-3",
    lg: "text-[14px] leading-[18px] p-4 md:text-[16px] md:leading-[20px]",
  };

  return (
    <div 
      className={`inline-block rounded-lg bg-secondary/50 border border-border font-mono whitespace-pre overflow-x-auto text-primary/80 ${sizeClasses[size]}`}
    >
      {art}
    </div>
  );
};

export default AsciiArt;
