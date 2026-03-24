import Button from "@/components/Button";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const stats = [
  { label: "Experience", value: "27+ Years" },
  { label: "Academic Track", value: "IIT Kanpur & IIT Delhi" },
  { label: "Core Focus", value: "RC & Steel Structures" }
];

const experienceItems = [
  {
    role: "General Manager - Structural Engineering",
    company: "Engineers India Limited",
    period: "Present",
    description:
      "Leading structural engineering strategy, design governance, and multidisciplinary coordination for large-scale hydrocarbon and infrastructure programs."
  },
  {
    role: "Leadership Across FEED, EPCM, and Detailed Design",
    company: "Engineers India Limited",
    period: "Career Progression",
    description:
      "Delivered reinforced concrete and steel structure design solutions across refinery, petrochemical, and industrial facilities with strong project management oversight."
  },
  {
    role: "Technical Associations & Standards Contributions",
    company: "ISRO, BIS, OISD",
    period: "Ongoing",
    description:
      "Contributed expert engineering insight to national standards, safety guidance, and specialized technical engagements in high-impact sectors."
  }
];

const expertiseItems = [
  {
    title: "Structural Engineering",
    description:
      "Reinforced concrete and steel design leadership for demanding industrial programs."
  },
  {
    title: "Offshore Analysis",
    description:
      "Specialized structural assessment for complex offshore and energy-linked systems."
  },
  {
    title: "Industrial Structures",
    description:
      "Practical, scalable frameworks for refinery, hydrocarbon, and infrastructure environments."
  },
  {
    title: "Project Management",
    description:
      "Strong coordination across design quality, delivery, stakeholders, and execution planning."
  }
];

const projectItems = [
  {
    title: "Refinery Expansion Programs",
    description:
      "Reserved for flagship hydrocarbon and downstream programs with future case-study detail."
  },
  {
    title: "International EPCM Assignments",
    description:
      "Ready for overseas project highlights covering structural systems, coordination, and execution."
  },
  {
    title: "Specialized Infrastructure Packages",
    description:
      "Prepared to showcase multidisciplinary industrial and strategic infrastructure work."
  }
];

const publicationItems = [
  "Advanced design approaches for reinforced concrete and steel structural systems",
  "Engineering perspectives on industrial structural safety and standards alignment",
  "Selected technical papers and industry knowledge contributions"
];

export default function HomePage() {
  return (
    <main className="page-shell relative overflow-x-clip">
      <Navbar />

      <section
        id="hero"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8"
      >
        <div className="grid w-full gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal className="space-y-7">
            <div className="inline-flex items-center rounded-full border border-accent/25 bg-surface px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent shadow-soft">
              Executive Portfolio
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.32em] text-accent/80">
                Sudip Paul
              </p>
              <h1 className="max-w-3xl text-balance font-heading text-4xl leading-tight text-text sm:text-5xl lg:text-6xl">
                General Manager - Structural Engineering
              </h1>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Civil and structural leadership for complex hydrocarbon,
                refinery, and infrastructure programs with a long-standing
                record across engineering, delivery, and institutional
                engagement.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="#experience">View Experience</Button>
              <Button href="#contact" variant="secondary">
                Contact
              </Button>
            </div>

            <div className="grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <Card key={item.label} className="p-5">
                  <p className="text-xs uppercase tracking-[0.26em] text-accent/80">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-text">
                    {item.value}
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay="0.12s">
            <Card className="mx-auto max-w-xl p-7 sm:p-8">
              <div className="space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                      Leadership Profile
                    </p>
                    <h2 className="mt-3 font-heading text-3xl text-text">
                      Engineers India Limited
                    </h2>
                  </div>
                  <div className="rounded-full border border-accent/25 px-4 py-2 text-[11px] uppercase tracking-[0.22em] text-accent">
                    FEED / EPCM
                  </div>
                </div>

                <p className="text-base leading-8 text-muted">
                  Leading structural design quality across reinforced concrete
                  and steel systems while balancing technical depth, project
                  management, and multidisciplinary execution.
                </p>

                <div className="space-y-4 rounded-[1.5rem] border border-border/70 bg-surface-soft/60 p-5">
                  <div className="flex items-center justify-between gap-3 text-sm text-muted">
                    <span>Current Focus</span>
                    <span className="text-right text-accent">
                      Civil & Structural Engineering
                    </span>
                  </div>
                  <div className="h-px bg-border/60" />
                  <div className="flex items-center justify-between gap-3 text-sm text-muted">
                    <span>Academic Foundation</span>
                    <span className="text-right text-accent">
                      IIT Kanpur (M.Tech), IIT Delhi (PhD)
                    </span>
                  </div>
                  <div className="h-px bg-border/60" />
                  <div className="flex items-center justify-between gap-3 text-sm text-muted">
                    <span>Institutional Links</span>
                    <span className="text-right text-accent">ISRO, BIS, OISD</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border/70 bg-surface-soft/60 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">
                      Expertise
                    </p>
                    <p className="mt-2 text-base font-semibold text-text">
                      RC & Steel Structures
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-surface-soft/60 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">
                      Delivery
                    </p>
                    <p className="mt-2 text-base font-semibold text-text">
                      Design & Project Management
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>

      <Section
        id="about"
        eyebrow="About"
        title="Engineering leadership shaped by technical discipline and executive clarity."
        description="A senior civil and structural engineering leader with extensive experience spanning reinforced concrete and steel structures, front-end engineering, detailed design, and project management across strategic industrial sectors."
      >
        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <Card className="h-full p-6 sm:p-8">
              <p className="text-base leading-8 text-muted">
                Sudip Paul brings a rare balance of technical depth and
                executive perspective. His work spans major national and
                international hydrocarbon, refinery, and infrastructure
                projects, with additional association across institutions such
                as ISRO, BIS, and the Oil Industry Safety Directorate.
              </p>
            </Card>
          </Reveal>

          <Reveal delay="0.08s">
            <Card className="h-full p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.26em] text-accent/80">
                Academic & Institutional Profile
              </p>
              <div className="mt-6 space-y-4">
                {[
                  {
                    label: "Education",
                    value: "IIT Kanpur (M.Tech), IIT Delhi (PhD)"
                  },
                  {
                    label: "Associations",
                    value: "ISRO, BIS, Oil Industry Safety Directorate"
                  }
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-sm font-semibold text-text">{item.label}</p>
                    <p className="mt-1 text-sm leading-7 text-muted">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="A career built through scale, design discipline, and responsibility."
        description="A timeline-ready structure that stays minimal today and expands cleanly as additional roles and project milestones are added."
      >
        <div className="relative space-y-6">
          <div className="timeline-line absolute left-4 top-2 h-[calc(100%-1rem)] w-px sm:left-1/2 sm:-translate-x-1/2" />
          {experienceItems.map((item, index) => (
            <Reveal
              key={item.role}
              delay={`${index * 0.08}s`}
              className="relative sm:grid sm:grid-cols-2 sm:gap-8"
            >
              <div
                className={`mb-4 pl-12 sm:mb-0 sm:pl-0 ${
                  index % 2 === 0 ? "sm:pr-10" : "sm:col-start-2 sm:pl-10"
                }`}
              >
                <Card className="relative p-6 sm:p-7">
                  <div
                    className={`absolute left-[-2.15rem] top-8 h-4 w-4 rounded-full border-4 border-bg bg-accent ${
                      index % 2 === 0
                        ? "sm:left-auto sm:right-[-2.45rem]"
                        : "sm:left-[-2.45rem] sm:right-auto"
                    }`}
                  />
                  <p className="text-xs uppercase tracking-[0.26em] text-accent/80">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl text-text">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">
                    {item.company}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </Card>
              </div>
              <div className={index % 2 === 0 ? "hidden sm:block" : "hidden"} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="expertise"
        eyebrow="Expertise"
        title="Focused capabilities across design, analysis, and project delivery."
        description="Card-based summaries with restrained styling, designed for clarity on both phone and desktop."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {expertiseItems.map((item, index) => (
            <Reveal key={item.title} delay={`${index * 0.06}s`}>
              <Card className="h-full p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent/25 bg-surface-soft/60 text-sm font-semibold text-accent">
                  0{index + 1}
                </div>
                <h3 className="font-heading text-2xl text-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Project placeholders arranged for future case-study expansion."
        description="The structure stays intentionally simple so real project details can be layered in without redesigning the page."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {projectItems.map((item, index) => (
            <Reveal key={item.title} delay={`${index * 0.08}s`}>
              <Card className="group h-full p-6">
                <div className="flex h-full flex-col">
                  <p className="text-xs uppercase tracking-[0.26em] text-accent/80">
                    Project {index + 1}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl text-text transition-colors duration-300 group-hover:text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                  <div className="mt-6 inline-flex w-fit rounded-full border border-accent/20 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent">
                    Placeholder Ready
                  </div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="publications"
        eyebrow="Publications"
        title="A clean list structure for papers, talks, and technical writing."
        description="Simple enough for today, while remaining ready for publication metadata, links, and citations later."
      >
        <Reveal>
          <Card className="p-3 sm:p-4">
            <div className="divide-y divide-border/50">
              {publicationItems.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 px-4 py-5 text-sm leading-7 text-muted sm:px-5"
                >
                  <span className="mt-1 text-xs uppercase tracking-[0.22em] text-accent/80">
                    0{index + 1}
                  </span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </Card>
        </Reveal>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Start a professional conversation."
        description="A clean minimal contact area that works now and can be connected to a backend service later without redesign."
      >
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <Card className="h-full p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                Email
              </p>
              <a
                href="mailto:sudip.paul@example.com"
                className="mt-4 inline-block font-heading text-2xl text-text transition-colors duration-300 hover:text-accent"
              >
                sudip.paul@example.com
              </a>
              <p className="mt-6 text-sm leading-7 text-muted">
                Available for engineering leadership conversations, technical
                consulting, speaking engagements, and professional networking.
              </p>
              <div className="mt-8 rounded-[1.5rem] border border-border/70 bg-surface-soft/60 p-5">
                <p className="text-sm font-semibold text-text">
                  Preferred discussion areas
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Structural design leadership, project strategy, industrial
                  engineering, and high-impact technical advisory work.
                </p>
              </div>
            </Card>
          </Reveal>

          <Reveal delay="0.08s">
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </main>
  );
}
