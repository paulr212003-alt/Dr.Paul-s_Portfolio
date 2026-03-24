export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = ""
}) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl scroll-mt-28 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`.trim()}
    >
      <div className="mb-10 max-w-3xl sm:mb-14">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.36em] text-gold/75">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="section-heading mt-4 font-heading text-3xl leading-tight text-parchment sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-8 text-mist/82">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
