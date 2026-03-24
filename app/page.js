import Button from "@/components/Button";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const experienceItems = [
  {
    role: "General Manager - Structural Engineering",
    company: "Engineers India Limited",
    period: "Present",
    description:
      "Leading structural engineering strategy, design governance, and multidisciplinary coordination for large-scale hydrocarbon and infrastructure programs."
  },
  {
    role: "Senior Leadership Roles in EPCM & FEED Delivery",
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
  "Structural Engineering",
  "Offshore Analysis",
  "Industrial Structures",
  "Project Management"
];

const projectItems = [
  {
    title: "Refinery Expansion Programs",
    description:
      "Scalable placeholder structure for flagship hydrocarbon and downstream facility projects."
  },
  {
    title: "International EPCM Assignments",
    description:
      "Reserved for overseas project highlights covering structural systems, coordination, and execution."
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
    <main className="relative overflow-x-clip">
      <Navbar />

      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[34rem]" />

      <section
        id="hero"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 items-center px-4 pb-20 pt-28 sm:px-6 lg:px-8"
      >
        <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-chestnut/70 px-4 py-2 text-xs uppercase tracking-[0.32em] text-gold/90 shadow-gold backdrop-blur">
              Executive Portfolio
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-mist/70">
                Sudip Paul
              </p>
              <h1 className="max-w-3xl font-heading text-4xl leading-tight text-parchment sm:text-5xl lg:text-6xl">
                General Manager - Structural Engineering
              </h1>
              <p className="max-w-2xl text-base leading-8 text-mist/85 sm:text-lg">
                Driving structural excellence across hydrocarbon, refinery, and
                infrastructure programs with 27+ years of engineering,
                leadership, and technical stewardship.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="#experience">View Experience</Button>
              <Button href="#contact" variant="secondary">
                Connect
              </Button>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { label: "Experience", value: "27+ Years" },
                { label: "Academic Credentials", value: "M.Tech + PhD" },
                { label: "Core Focus", value: "RC & Steel Structures" }
              ].map((item) => (
                <Card
                  key={item.label}
                  className="border-gold/20 bg-chestnut/55 p-5 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-gold/75">
                    {item.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-parchment">
                    {item.value}
                  </p>
                </Card>
              ))}
            </div>
          </Reveal>

          <Reveal delay="0.12s" className="relative">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-gold/20 bg-gradient-to-br from-chestnut via-[#352119] to-[#21130d] p-7 shadow-glow">
              <div className="absolute inset-0 bg-executive-radial opacity-80" />
              <div className="relative space-y-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-gold/70">
                      Leadership Profile
                    </p>
                    <p className="mt-3 font-heading text-2xl text-parchment">
                      Engineers India Limited
                    </p>
                  </div>
                  <div className="h-14 w-14 animate-float rounded-full border border-gold/25 bg-gold/10 shadow-gold" />
                </div>

                <div className="space-y-4 rounded-[1.5rem] border border-gold/15 bg-espresso/75 p-5">
                  <div className="flex items-center justify-between text-sm text-mist/80">
                    <span>Discipline</span>
                    <span className="text-gold">Civil & Structural</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
                  <div className="flex items-center justify-between text-sm text-mist/80">
                    <span>Specialization</span>
                    <span className="text-gold">Industrial & Offshore</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
                  <div className="flex items-center justify-between text-sm text-mist/80">
                    <span>Academic Base</span>
                    <span className="text-gold">IIT Kanpur & IIT Delhi</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-gold/15 bg-espresso/70 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-mist/55">
                      Institutions
                    </p>
                    <p className="mt-2 text-base font-semibold text-parchment">
                      ISRO, BIS, OISD
                    </p>
                  </div>
                  <div className="rounded-2xl border border-gold/15 bg-espresso/70 p-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-mist/55">
                      Delivery
                    </p>
                    <p className="mt-2 text-base font-semibold text-parchment">
                      FEED, EPCM, Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section
        id="about"
        eyebrow="Profile"
        title="Engineering leadership shaped by deep technical discipline."
        description="A senior civil and structural engineering leader with extensive experience spanning reinforced concrete and steel structures, front-end engineering, detailed design, and project management across strategic industrial sectors."
      >
        <Reveal>
          <div className="rounded-[1.75rem] border border-gold/15 bg-chestnut/50 p-6 shadow-gold backdrop-blur-sm sm:p-8">
            <p className="text-base leading-8 text-mist/90">
              Sudip Paul brings a rare balance of technical depth and executive
              perspective. His work spans major national and international
              hydrocarbon, refinery, and infrastructure projects, with
              additional association across institutions such as ISRO, BIS, and
              the Oil Industry Safety Directorate.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="A career built through design rigor, scale, and responsibility."
        description="A timeline-ready structure designed to grow as more project and leadership milestones are added."
      >
        <div className="relative space-y-6 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-gradient-to-b before:from-gold/0 before:via-gold/40 before:to-gold/0 sm:before:left-1/2 sm:before:-translate-x-1/2">
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
                <Card className="relative p-6">
                  <div
                    className={`absolute left-[-2.15rem] top-8 h-4 w-4 rounded-full border-4 border-espresso bg-gold ${
                      index % 2 === 0
                        ? "sm:left-auto sm:right-[-2.45rem]"
                        : "sm:left-[-2.45rem] sm:right-auto"
                    }`}
                  />
                  <p className="text-xs uppercase tracking-[0.3em] text-gold/75">
                    {item.period}
                  </p>
                  <h3 className="mt-3 font-heading text-2xl text-parchment">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-mist/70">
                    {item.company}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-mist/85">
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
        title="Focused capabilities across design, analysis, and project execution."
        description="Core areas showcased in a compact layout optimized for quick scanning on mobile."
      >
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {expertiseItems.map((item, index) => (
            <Reveal key={item} delay={`${index * 0.06}s`}>
              <Card className="h-full p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-gold/10 text-lg font-semibold text-gold shadow-gold">
                  0{index + 1}
                </div>
                <h3 className="font-heading text-2xl text-parchment">{item}</h3>
                <p className="mt-3 text-sm leading-7 text-mist/80">
                  Structured to scale into detailed competency narratives,
                  tools, methodologies, and delivery highlights.
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Selected Work"
        title="Project highlights ready for detailed case studies."
        description="Placeholder cards with a clean content pattern for future expansion."
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {projectItems.map((item, index) => (
            <Reveal key={item.title} delay={`${index * 0.08}s`}>
              <Card className="group h-full p-6">
                <div className="flex h-full flex-col">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold/75">
                    Project {index + 1}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl text-parchment transition-colors duration-300 group-hover:text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-mist/82">
                    {item.description}
                  </p>
                  <div className="mt-6 inline-flex items-center text-sm text-gold">
                    Structure Ready
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
        title="A streamlined section for papers, talks, and technical writing."
        description="Designed as a simple list today, while staying easy to expand into full publication metadata later."
      >
        <Reveal>
          <Card className="p-3 sm:p-4">
            <div className="divide-y divide-gold/10">
              {publicationItems.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 px-4 py-5 text-sm leading-7 text-mist/88 sm:px-5"
                >
                  <span className="mt-1 text-xs uppercase tracking-[0.24em] text-gold/65">
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
        title="Start a conversation."
        description="A minimal contact block and form interface, ready for a backend integration later if needed."
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Card className="h-full p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.32em] text-gold/75">
                Email
              </p>
              <a
                href="mailto:sudip.paul@example.com"
                className="mt-4 inline-block font-heading text-2xl text-parchment transition-colors duration-300 hover:text-gold"
              >
                sudip.paul@example.com
              </a>
              <p className="mt-6 text-sm leading-7 text-mist/82">
                Available for engineering leadership conversations, technical
                consulting, speaking engagements, and professional networking.
              </p>
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
