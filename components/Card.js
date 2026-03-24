export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-[1.75rem] border border-gold/15 bg-gradient-to-br from-chestnut/80 to-[#26160f]/95 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-glow ${className}`.trim()}
    >
      {children}
    </div>
  );
}
