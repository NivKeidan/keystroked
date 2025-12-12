import { ArrowRight, Clock, Calendar } from "lucide-react";
import AsciiArt from "./AsciiArt";

export interface PostCardProps {
  slug?: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  asciiArt: string;
  tags: string[];
  delay?: number;
  compact?: boolean;
}

const PostCard = ({
  slug,
  title,
  excerpt,
  date,
  readTime,
  asciiArt,
  tags,
  delay = 0,
  compact = false,
}: PostCardProps) => {
  const content = (
    <>
      {/* ASCII Art Header */}
      {!compact && (
        <div className="p-4 pb-0">
          <AsciiArt art={asciiArt} size="sm" />
        </div>
      )}

      {/* Content */}
      <div className={compact ? "p-4" : "p-5 flex flex-col flex-grow"}>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.slice(0, compact ? 2 : tags.length).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-mono bg-forest text-white rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className={`font-mono font-semibold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2 ${compact ? "text-base mb-1" : "text-lg mb-2"}`}>
          {title}
        </h3>

        {/* Excerpt */}
        {!compact && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* Meta */}
        <div className={`flex items-center justify-between ${compact ? "pt-2" : "pt-4 border-t border-border"}`}>
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {readTime}
            </span>
          </div>

          <span className="text-primary text-sm group-hover:translate-x-1 transition-transform duration-300">
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </>
  );

  const className = "group post-card flex flex-col fade-in opacity-0 cursor-pointer";
  const style = { animationDelay: `${delay * 0.1}s`, animationFillMode: 'forwards' as const };

  if (slug) {
    return (
      <a href={`/keystroked/posts/${slug}`} className={className} style={style}>
        {content}
      </a>
    );
  }

  return (
    <div className={className} style={style}>
      {content}
    </div>
  );
};

export default PostCard;
