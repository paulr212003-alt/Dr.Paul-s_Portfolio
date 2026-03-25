export default function Section({
  id,
  eyebrow,
  title,
  description,
  actions,
  children,
  className = ""
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl scroll-mt-28 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`.trim()}
    >
      <div
        className={`mb-10 ${
          actions ? "sm:flex sm:items-start sm:justify-between sm:gap-6" : ""
        }`}
      >
        <div className="max-w-3xl sm:mb-14">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.32em] text-accent/80">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="section-heading mt-4 font-heading text-3xl leading-tight text-text sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
              {description}
            </p>
          ) : null}
        </div>
        {actions ? <div className="mt-6 sm:mt-0 sm:shrink-0">{actions}</div> : null}
      </div>
      {children}
    </section>
  );
}
