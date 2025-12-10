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

// Predefined ASCII art pieces for blog posts
export const ASCII_ARTS = {
  terminal: `
  ┌──────────────────────────────┐
  │  $  echo "Hello, World!"    │
  │  Hello, World!              │
  │  $  _                       │
  └──────────────────────────────┘
  `,
  code: `
     ╔══════════════════╗
     ║   < / >  CODE    ║
     ║  ═══════════════ ║
     ║  function() {    ║
     ║    return ✨;    ║
     ║  }               ║
     ╚══════════════════╝
  `,
  design: `
   ┌─────────────────────┐
   │  ◉ ◉ ◉  DESIGN     │
   ├─────────────────────┤
   │  ┌───┐   ━━━━━━    │
   │  │ ◈ │   ━━━━      │
   │  └───┘   ━━━━━━━   │
   └─────────────────────┘
  `,
  api: `
   ╭──────────────────────╮
   │   ⟨ REST API ⟩      │
   │  ═══════════════════ │
   │  GET  /users  → 200  │
   │  POST /data   → 201  │
   │  PUT  /item   → 200  │
   ╰──────────────────────╯
  `,
  database: `
   ┏━━━━━━━━━━━━━━━━━━━━┓
   ┃   ◎ DATABASE      ┃
   ┣━━━━━━━━━━━━━━━━━━━━┫
   ┃  ├─ users         ┃
   ┃  ├─ posts         ┃
   ┃  └─ comments      ┃
   ┗━━━━━━━━━━━━━━━━━━━━┛
  `,
  react: `
   ╔═══════════════════════╗
   ║     ⚛️  REACT        ║
   ╠═══════════════════════╣
   ║  const [state] =     ║
   ║    useState(null);   ║
   ║  return <App />;     ║
   ╚═══════════════════════╝
  `,
};

export default AsciiArt;
