import Button from "@/components/Button";
import Card from "@/components/Card";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";

const stats = [
  { label: "Experience", value: "27+ Years" },
  { label: "Current Role", value: "General Manager" },
  { label: "Specialization", value: "Industrial & Offshore" }
];

const experienceItems = [
  {
    role: "General Manager – Structural Engineering",
    company: "Engineers India Limited",
    period: "Present",
    description:
      "Leading structural engineering strategy, design governance, and multidisciplinary coordination for complex industrial, hydrocarbon, and infrastructure programs."
  },
  {
    role: "Leadership Across FEED, EPCM, and Detailed Design",
    company: "Engineers India Limited",
    period: "Career Progression",
    description:
      "Delivered reinforced concrete and structural steel engineering solutions across major national and international assignments with strong project management oversight."
  },
  {
    role: "Technical Associations & Standards Contributions",
    company: "ISRO, BIS, Public-Sector Enterprises",
    period: "Ongoing",
    description:
      "Contributed technical expertise to strategic projects, institutional collaboration, and the evolution of Indian Standards in earthquake engineering."
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
      "Structural review and analysis for offshore platforms and associated systems."
  },
  {
    title: "Blast-Resistant Design",
    description:
      "Engineering solutions for control rooms and critical structures in high-risk environments."
  },
  {
    title: "Structural Rehabilitation",
    description:
      "Retrofit, repair, and strengthening strategies for existing concrete and steel assets."
  }
];

const projectItems = [
  {
    title: "Hydrocarbon & Refinery Programs",
    description:
      "Reserved for flagship engineering programs spanning design leadership, execution planning, and interdisciplinary coordination."
  },
  {
    title: "Strategic Industrial Infrastructure",
    description:
      "Prepared for future case studies covering public-sector and nationally significant engineering work."
  },
  {
    title: "Offshore & Specialized Structures",
    description:
      "Structured to showcase offshore analysis, rehabilitation, and safety-critical structural interventions."
  }
];

const publicationItems = [
  {
    href: "/papers/paper1.pdf",
    title:
      "Residual Stresses and Local Buckling in Indian Standard Hot-Rolled Steel Sections"
  },
  {
    href: "/papers/paper2.pdf",
    title:
      "State-of-the-Art Review of Seismic Design of Steel Moment Resisting Frames, Part I : General Considerations and Stability Provisions"
  },
  {
    href: "/papers/paper3.pdf",
    title:
      "State-of-the-Art Review of Seismic Design of Steel Moment Resisting Frames, Part II : Strength and Drift Criteria"
  },
  {
    href: "/papers/paper4.pdf",
    title: "Drift-Based Re-Sizing of Steel Frames Including Joint Deformations"
  },
  {
    href: "/papers/paper5.pdf",
    title:
      "Control of Fixed Offshore Jacket Platform Using Semi-Active Hydraulic Damper"
  },
  {
    href: "/papers/paper6.pdf",
    title: "Semiactive Clipped Optimal Control of Fixed Offshore Jacket Platform"
  },
  {
    href: "/papers/paper7.pdf",
    title:
      "Semiactive Control of a Fixed Offshore Jacket Platform Using LQR Algorithm"
  },
  {
    href: "/papers/paper8.pdf",
    title:
      "Mitigation of Existing Non-Blast Proof Control Room Buildings for Anticipated Vapour Cloud Explosions in Refineries"
  },
  {
    href: "/papers/paper9.pdf",
    title: "Rehabilitation of Fire Damaged Structure"
  },
  {
    href: "/papers/paper10.pdf",
    title: "Retrofitting of Existing Pipe Rack Structures"
  }
];

const contactActions = [
  {
    href: "https://www.linkedin.com/in/dr-sudip-paul-9412911b/",
    icon: LinkedInIcon,
    label: "LinkedIn",
    target: "_blank"
  },
  {
    href: "mailto:sudip.rishabh@gmail.com",
    icon: MailIcon,
    label: "Email"
  },
  {
    href: "tel:+919818683797",
    icon: PhoneIcon,
    label: "Call Me"
  }
];

export default function HomePage() {
  return (
    <main className="page-shell relative overflow-x-clip">
      <Navbar />

      <section
        id="hero"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 items-center px-4 pb-16 pt-44 sm:px-6 sm:pt-40 lg:px-8 lg:pt-32"
      >
        <div className="grid w-full gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal className="space-y-7">
            <div className="inline-flex items-center rounded-full border border-accent/25 bg-surface px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent shadow-soft">
              Executive Portfolio
            </div>

            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.32em] text-accent/80">
                Dr. Sudip Paul
              </p>
              <h1 className="max-w-3xl text-balance font-heading text-4xl leading-tight text-text sm:text-5xl lg:text-6xl">
                General Manager – Structural Engineering
              </h1>
              <p className="text-base font-semibold uppercase tracking-[0.28em] text-accent/80 sm:text-lg">
                Industrial & Offshore Infrastructure
              </p>
              <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                Executive-level structural engineering leadership for complex
                industrial, hydrocarbon, and infrastructure programs across
                national and international landscapes.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="#experience">View Experience</Button>
              <Button href="#publications" variant="secondary">
                View Publications
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
                  Dr. Sudip Paul combines technical depth, project leadership,
                  and strategic engineering judgment across reinforced concrete,
                  structural steel, offshore structures, and rehabilitation
                  programs.
                </p>

                <div className="space-y-4 rounded-[1.5rem] border border-border/70 bg-surface-soft/60 p-5">
                  <div className="flex items-center justify-between gap-3 text-sm text-muted">
                    <span>Academic Foundation</span>
                    <span className="text-right text-accent">
                      IIT Kanpur (M.Tech), IIT Delhi (PhD)
                    </span>
                  </div>
                  <div className="h-px bg-border/60" />
                  <div className="flex items-center justify-between gap-3 text-sm text-muted">
                    <span>Major Associations</span>
                    <span className="text-right text-accent">ISRO, BIS</span>
                  </div>
                  <div className="h-px bg-border/60" />
                  <div className="flex items-center justify-between gap-3 text-sm text-muted">
                    <span>Core Delivery</span>
                    <span className="text-right text-accent">
                      FEED, EPCM, Design Execution
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-border/70 bg-surface-soft/60 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">
                      Expertise
                    </p>
                    <p className="mt-2 text-base font-semibold text-text">
                      Offshore, Blast, Rehab
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border/70 bg-surface-soft/60 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-muted">
                      Leadership
                    </p>
                    <p className="mt-2 text-base font-semibold text-text">
                      Multidisciplinary Delivery
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
        title="An executive engineering profile built on scale, rigor, and multidisciplinary delivery."
        description="A focused summary drawn directly from Dr. Sudip Paul's professional background."
      >
        <Reveal>
          <Card className="p-6 sm:p-8">
            <p className="text-base leading-8 text-muted">
              Dr. Sudip Paul is a seasoned Structural Engineering leader with
              over 27 years of experience delivering complex industrial,
              hydrocarbon, and infrastructure projects across national and
              international landscapes. Currently serving as General Manager at
              Engineers India Limited, he has led multidisciplinary engineering
              initiatives spanning FEED, EPCM, detailed design, and project
              execution.
            </p>
            <p className="mt-6 text-base leading-8 text-muted">
              His expertise includes reinforced concrete and steel structures,
              offshore platform analysis, blast-resistant design, and
              structural rehabilitation. He has contributed to projects of
              strategic importance for organizations such as ISRO and major
              public-sector enterprises, while also playing an active role in
              the development of Indian Standards in earthquake engineering.
            </p>
          </Card>
        </Reveal>
      </Section>

      <Section
        id="experience"
        eyebrow="Experience"
        title="A career shaped by design discipline, project scale, and institutional trust."
        description="A timeline-ready structure that stays minimal today and expands cleanly as additional project milestones are added."
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
        title="Focused capabilities across industrial, offshore, and rehabilitation work."
        description="Minimal card-based summaries designed for quick scanning on phone and desktop."
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
        description="The structure stays intentionally simple so detailed project narratives can be added without redesigning the page."
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
        title="Selected publications and technical papers."
        description="Ten publication entries taken from Dr. Sudip Paul's CV, each linked to a placeholder paper file path."
      >
        <div className="space-y-4">
          {publicationItems.map((item, index) => (
            <Reveal key={item.title} delay={`${index * 0.04}s`}>
              <Card className="p-5 sm:p-6">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex gap-4">
                    <span className="mt-1 text-xs uppercase tracking-[0.22em] text-accent/80">
                      0{index + 1}
                    </span>
                    <p className="max-w-4xl text-sm leading-7 text-text sm:text-base">
                      {item.title}
                    </p>
                  </div>
                  <Button
                    href={item.href}
                    variant="secondary"
                    size="sm"
                    className="normal-case tracking-[0.08em]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Paper
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Contact"
        title="Connect directly or send a message."
        description="The direct actions below are paired with a backend-powered contact form that can be deployed on Vercel with SMTP credentials."
      >
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <Reveal>
            <Card className="h-full p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                Direct Contact
              </p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Reach Dr. Sudip Paul through the options below, or use the form
                to send a message directly to his inbox.
              </p>

              <div className="mt-8 grid gap-3">
                {contactActions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Button
                      key={item.label}
                      href={item.href}
                      variant="secondary"
                      size="sm"
                      className="justify-start gap-2 normal-case tracking-[0.08em]"
                      target={item.target}
                      rel={item.target ? "noreferrer" : undefined}
                    >
                      <Icon />
                      <span>{item.label}</span>
                    </Button>
                  );
                })}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-border/70 bg-surface-soft/60 p-5">
                <p className="text-sm font-semibold text-text">
                  Message routing
                </p>
                <p className="mt-2 text-sm leading-7 text-muted">
                  Form submissions are configured to send Name, Email, and
                  Message details to the portfolio contact inbox using the API
                  route.
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

function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path d="M7 9v8" />
      <path d="M12 12v5" />
      <path d="M12 12c0-1.7 1.1-3 2.8-3 1.7 0 2.7 1 2.7 3.2V17" />
      <path d="M6.9 6.5h.2" strokeLinecap="round" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
      <path d="M4.5 7l7.5 5 7.5-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth="1.8"
    >
      <path d="M8.4 4.7l1.4 2.8c.3.5.2 1.1-.2 1.6l-1.1 1.1a13.7 13.7 0 0 0 5.3 5.3l1.1-1.1c.4-.4 1-.5 1.6-.2l2.8 1.4c.8.4 1.1 1.3.8 2.1l-.5 1.3c-.3.7-.9 1.2-1.7 1.2C10.4 20.2 3.8 13.6 3.8 5.6c0-.8.5-1.4 1.2-1.7l1.3-.5c.8-.3 1.7 0 2.1.8Z" />
    </svg>
  );
}
