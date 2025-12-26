import { ArrowRight, Clock, Calendar } from "lucide-react";

interface FeaturedPostProps {
  slug?: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  thumbnail: string;
  tags: string[];
}

const FeaturedPost = ({
  slug,
  title,
  excerpt,
  date,
  readTime,
  thumbnail,
  tags,
}: FeaturedPostProps) => {
  const content = (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Image Section */}
      <div className="lg:w-2/5">
        <img src={`/${thumbnail}`} alt={title} className="w-full h-auto rounded-lg" />
      </div>

      {/* Content Section */}
      <div className="lg:w-3/5 flex flex-col justify-between">
        <div>
          {/* Featured Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 text-xs font-mono bg-forest text-white rounded-full border border-primary/30">
              ★ Featured
            </span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-mono font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            {title}
          </h2>

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed mb-6">
            {excerpt}
          </p>
        </div>

        {/* Meta & CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {readTime}
            </span>
          </div>

          <span className="inline-flex items-center gap-2 text-primary font-mono text-sm group-hover:gap-3 transition-all duration-300">
            Read Article
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </div>
  );

  if (slug) {
    return (
      <a
        href={`/posts/${slug}`}
        className="group terminal-box p-6 md:p-8 fade-in cursor-pointer block"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="group terminal-box p-6 md:p-8 fade-in">
      {content}
    </article>
  );
};

export default FeaturedPost;
