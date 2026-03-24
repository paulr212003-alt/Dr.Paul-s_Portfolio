export default function Button({
  as = "a",
  href,
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const Component = as;
  const baseStyles =
    "inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.26em] transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-espresso";
  const variantStyles =
    variant === "secondary"
      ? "border-gold/25 bg-transparent text-parchment hover:border-gold/60 hover:text-gold hover:shadow-glow"
      : "border-gold/35 bg-gold/10 text-gold shadow-gold hover:-translate-y-0.5 hover:border-glow hover:bg-gold/15 hover:text-parchment hover:shadow-glow";

  const componentProps =
    Component === "a" && href ? { href } : props;

  return (
    <Component
      className={`${baseStyles} ${variantStyles} ${className}`.trim()}
      {...componentProps}
      {...(Component === "a" && href ? props : {})}
    >
      {children}
    </Component>
  );
}
