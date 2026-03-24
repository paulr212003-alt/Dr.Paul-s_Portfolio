export default function Button({
  as = "a",
  href,
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...props
}) {
  const Component = as;
  const baseStyles =
    "inline-flex items-center justify-center rounded-full border font-semibold uppercase transition duration-300 ease-out disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/45 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  const sizeStyles =
    size === "sm"
      ? "px-4 py-2 text-[11px] tracking-[0.22em]"
      : "px-6 py-3 text-sm tracking-[0.22em]";
  const variantStyles =
    variant === "secondary"
      ? "border-border/90 bg-surface text-text shadow-soft hover:-translate-y-0.5 hover:scale-[1.01] hover:border-accent/55 hover:text-accent hover:shadow-glow"
      : "border-accent bg-accent text-accent-contrast shadow-soft hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-glow";
  const componentProps = href ? { href } : {};

  return (
    <Component
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`.trim()}
      {...componentProps}
      {...props}
    >
      {children}
    </Component>
  );
}
