export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-[1.75rem] border border-border/75 bg-surface/94 shadow-soft backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/28 hover:shadow-float ${className}`.trim()}
    >
      {children}
    </div>
  );
}
