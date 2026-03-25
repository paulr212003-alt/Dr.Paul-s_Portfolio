"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import CareerTimelineSection from "@/components/CareerTimelineSection";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import ProjectMap from "@/components/ProjectMap";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { getProjectsByCategory } from "@/data/projects";

const stats = [
  { label: "Experience", value: "27+ Years" },
  { label: "Current Role", value: "General Manager" },
  { label: "Specialization", value: "Industrial & Offshore" }
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

const academicsItems = [
  {
    logoAlt: "IIEST Shibpur logo",
    logoSrc: "/IIEST_Shibpur_Logo.png",
    degree: "B.E Civil Engineering",
    institute: "IIEST Shibpur",
    year: "1994",
    score: "85.32%",
    achievement: "First Rank"
  },
  {
    logoAlt: "IIT Kanpur logo",
    logoSrc: "/IIT-K.png",
    degree: "M.Tech Structural Engineering",
    institute: "IIT Kanpur",
    year: "1998",
    score: "9.0 CGPI",
    achievement: "Highest CGPI"
  },
  {
    logoAlt: "IIT Delhi logo",
    logoSrc: "/IIT-D.png",
    degree: "PhD Structural Engineering",
    institute: "IIT Delhi",
    year: "2011",
    score: "9.5 CGPI",
    achievement: "Highest CGPI"
  }
];

const affiliationItems = [
  {
    name: "Engineers India Limited",
    label: "Executive Leadership",
    description:
      "Driving structural engineering governance, multidisciplinary coordination, and large-scale project execution across hydrocarbon, refinery, and infrastructure domains. Leading high-impact engineering initiatives across FEED, EPCM, and detailed design phases for nationally significant projects."
  },
  {
    name: "ISRO",
    label: "Strategic Contribution",
    description:
      "Contributed to critical infrastructure development supporting India's space missions, including structural engineering involvement in launch facility systems. Work demanded high precision, reliability, and adherence to stringent safety and performance standards associated with aerospace infrastructure."
  },
  {
    name: "The Institution of Engineers (India)",
    label: "Professional Fellowship",
    description:
      "Recognized as a Fellow of India's premier professional engineering body, reflecting sustained contributions to the engineering profession, technical excellence, and leadership within the civil and structural engineering community."
  },
  {
    name: "IIT Kanpur Building Works Committee",
    label: "Academic Infrastructure Governance",
    description:
      "Active member contributing to planning, evaluation, and oversight of institutional infrastructure development at IIT Kanpur, ensuring engineering integrity, safety, and alignment with long-term academic and research needs."
  },
  {
    name: "Oil Industry Safety Directorate (OISD)",
    label: "Sector Safety Interface",
    description:
      "Associated with safety standardization for hydrocarbon infrastructure, particularly in control room design and blast-resistant structures. Contributing to frameworks that enhance operational safety in high-risk industrial environments."
  },
  {
    name: "Indian Society for Wind Engineering (ISWE)",
    label: "Technical Community Engagement",
    description:
      "Member of a specialized body focused on wind effects on structures, contributing to the understanding and application of aerodynamic and environmental loading considerations in structural design."
  },
  {
    name: "Bureau of Indian Standards (BIS)",
    label: "Standards Development",
    description:
      "Actively involved in the development and refinement of Indian Standards, particularly in earthquake engineering and structural safety. Contribution supports national-level codification and engineering best practices."
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

const indiaProjects = getProjectsByCategory("india");
const internationalProjects = getProjectsByCategory("international");

export default function HomePage() {
  const [isStructuralMode, setIsStructuralMode] = useState(false);

  const structuralModeItems = [
    {
      label: "Projects",
      href: "#projects",
      description: "Browse geography-linked assignments."
    },
    {
      label: "Academics",
      href: "#academics",
      description: "Review institutions, degrees, and distinctions."
    },
    {
      label: "Affiliations",
      href: "#affiliations",
      description: "See institutional and sector associations."
    },
    {
      label: "Career Timeline",
      href: "#experience",
      description: "Move through the combined role and project timeline."
    },
    {
      label: "Publications",
      href: "#publications",
      description: "Open selected papers and publications."
    },
    {
      label: "Expertise",
      href: "#expertise",
      description: "Scan focused technical capabilities."
    },
    {
      label: "Contact",
      href: "#contact",
      description: "Reach out through direct channels."
    }
  ];

  return (
    <main className="page-shell relative overflow-x-clip">
      <Navbar />

      <section
        id="hero"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl scroll-mt-24 items-center px-4 pb-16 pt-52 sm:px-6 sm:pt-44 lg:px-8 lg:pt-32"
      >
        <div className="w-full">
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isStructuralMode
                ? "pointer-events-none max-h-0 translate-y-3 opacity-0"
                : "max-h-[2600px] translate-y-0 opacity-100"
            }`}
            aria-hidden={isStructuralMode}
          >
            <div className="grid w-full gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <Reveal className="space-y-7">
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full border border-accent/45 bg-surface-soft shadow-soft sm:h-20 sm:w-20">
                    <Image
                      src="/profile.png"
                      alt="Portrait of Dr. Sudip Paul"
                      fill
                      sizes="(min-width: 640px) 80px, 64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full border border-accent/25 bg-surface px-4 py-2 text-xs uppercase tracking-[0.3em] text-accent shadow-soft">
                      Executive Portfolio
                    </div>
                    <p className="text-xs uppercase tracking-[0.32em] text-accent/80">
                      Dr. Sudip Paul
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <h1 className="max-w-3xl text-balance font-heading text-4xl leading-tight text-text sm:text-5xl lg:text-6xl">
                    General Manager - Structural Engineering
                  </h1>
                  <p className="text-base font-semibold uppercase tracking-[0.28em] text-accent/80 sm:text-lg">
                    Industrial and Offshore Infrastructure
                  </p>
                  <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
                    Executive-level structural engineering leadership for
                    complex industrial, hydrocarbon, and infrastructure programs
                    across national and international landscapes.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                  <Button href="#projects">View Projects</Button>
                  <Button href="#experience" variant="secondary">
                    View Timeline
                  </Button>
                  <Button
                    as="button"
                    type="button"
                    variant="secondary"
                    onClick={() => setIsStructuralMode(true)}
                    aria-pressed={isStructuralMode}
                  >
                    Structural Mode
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
                      Dr. Sudip Paul combines technical depth, project
                      leadership, and strategic engineering judgment across
                      reinforced concrete, structural steel, offshore
                      structures, and rehabilitation programs.
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <ProfileHighlight
                        label="Academics"
                        value="IIEST Shibpur, IIT Kanpur, IIT Delhi"
                      />
                      <ProfileHighlight
                        label="Affiliations"
                        value="ISRO, IEI, BIS, OISD, ISWE"
                      />
                      <ProfileHighlight
                        label="Core Delivery"
                        value="FEED, EPCM, Design Execution"
                      />
                      <ProfileHighlight
                        label="Technical Focus"
                        value="Offshore, Blast, Rehabilitation"
                      />
                    </div>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isStructuralMode
                ? "max-h-[2600px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
            }`}
            aria-hidden={!isStructuralMode}
          >
            <Reveal className="mx-auto max-w-4xl">
              <Card className="p-5 sm:p-7">
                <div className="space-y-6">
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-accent/80">
                      Structural Mode
                    </p>
                    <h2 className="font-heading text-3xl text-text sm:text-4xl">
                      Navigate the portfolio through a structured overview.
                    </h2>
                    <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                      A compact sectional layout designed for quick scanning
                      across projects, academics, publications, affiliations,
                      and leadership credentials.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    {structuralModeItems.map((item) => (
                      <StructuralModeLink
                        key={item.label}
                        href={item.href}
                        label={item.label}
                        description={item.description}
                      />
                    ))}

                    <StructuralModeButton
                      label="Toggle OFF"
                      description="Return to the primary executive hero layout."
                      onClick={() => setIsStructuralMode(false)}
                    />
                  </div>

                  <div className="rounded-[1.5rem] border border-border/75 bg-surface-soft/70 p-5 sm:p-6">
                    <p className="text-xs uppercase tracking-[0.26em] text-accent/80">
                      About
                    </p>
                    <p className="mt-4 text-sm leading-8 text-muted sm:text-base">
                      Dr. Sudip Paul is a seasoned Structural Engineering leader
                      with over 27 years of experience delivering complex
                      industrial, hydrocarbon, and infrastructure projects
                      across national and international landscapes. His work
                      spans FEED, EPCM, detailed design, project execution, and
                      the advancement of Indian Standards in earthquake
                      engineering.
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      <Section
        id="projects"
        eyebrow="Projects"
        title="Projects by geography."
        description="A static SVG-driven project map experience with separate views for India and international work."
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <Reveal>
            <ProjectMap
              title="India Projects"
              description="A focused view of representative assignments located across India."
              mapAlt="Stylized map of India"
              mapSrc="/maps/india.svg"
              projects={indiaProjects}
            />
          </Reveal>

          <Reveal delay="0.08s">
            <ProjectMap
              title="International Projects"
              description="Representative international work shown on a simplified world map."
              mapAlt="Stylized world map"
              mapSrc="/maps/world.svg"
              projects={internationalProjects}
            />
          </Reveal>
        </div>
      </Section>

      <CareerTimelineSection />

      <Section
        id="academics"
        eyebrow="Academics"
        title="A strong academic foundation with consistent distinction."
        description="Institutions now lead the hierarchy, with degrees presented as the supporting line beneath each heading."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {academicsItems.map((item, index) => (
            <Reveal key={item.institute} delay={`${index * 0.06}s`}>
              <Card className="h-full p-6">
                <div className="relative h-16 w-16 overflow-hidden rounded-[1rem] border border-accent/30 bg-surface-soft/90 p-2">
                  <Image
                    src={item.logoSrc}
                    alt={item.logoAlt}
                    fill
                    sizes="64px"
                    className="object-contain p-2"
                  />
                </div>
                <p className="mt-6 text-xs uppercase tracking-[0.24em] text-accent/80">
                  {item.year}
                </p>
                <h3 className="mt-3 font-heading text-2xl text-text">
                  {item.institute}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.degree}
                </p>
                <div className="mt-6 space-y-3 rounded-[1.35rem] border border-border/70 bg-surface-soft/70 p-4">
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-muted">Score</span>
                    <span className="font-semibold text-text">{item.score}</span>
                  </div>
                  <div className="h-px bg-border/60" />
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-muted">Achievement</span>
                    <span className="text-right font-semibold text-accent">
                      {item.achievement}
                    </span>
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
        id="affiliations"
        eyebrow="Affiliations"
        title="Institutional associations that reflect trust, standards, and strategic engagement."
        description="A concise view of the organizations and forums connected to Dr. Sudip Paul's professional work."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {affiliationItems.map((item, index) => (
            <Reveal key={item.name} delay={`${index * 0.06}s`}>
              <Card className="h-full p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-accent/80">
                  {item.label}
                </p>
                <h3 className="mt-3 font-heading text-2xl text-text">
                  {item.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="expertise"
        eyebrow="Expertise"
        title="Focused capabilities across industrial, offshore, and rehabilitation work."
        description="A summary layer that closes the narrative after projects, credentials, and publications."
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
        id="contact"
        eyebrow="Contact"
        title="Connect directly."
        description="The direct contact buttons below keep the experience simple and reliable."
      >
        <Reveal>
          <Card className="p-6 sm:p-8">
            <p className="text-sm leading-7 text-muted">
              Reach Dr. Sudip Paul through LinkedIn, email, or phone using the
              direct actions below.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
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
          </Card>
        </Reveal>
      </Section>
    </main>
  );
}

function ProfileHighlight({ label, value }) {
  return (
    <div className="rounded-[1.35rem] border border-border/70 bg-surface-soft/65 p-4">
      <p className="text-xs uppercase tracking-[0.22em] text-muted">{label}</p>
      <p className="mt-2 text-sm font-semibold leading-6 text-text">{value}</p>
    </div>
  );
}

function StructuralModeLink({ href, label, description }) {
  return (
    <a
      href={href}
      className="rounded-[1.4rem] border border-border/80 bg-surface/96 p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:border-accent/40"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-accent/80">
        Portfolio Section
      </p>
      <h3 className="mt-3 font-heading text-2xl text-text">{label}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
    </a>
  );
}

function StructuralModeButton({ label, description, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-[1.4rem] border border-accent/40 bg-surface/96 p-5 text-left transition duration-300 hover:-translate-y-0.5 hover:shadow-glow"
    >
      <p className="text-xs uppercase tracking-[0.22em] text-accent/80">
        Portfolio Section
      </p>
      <h3 className="mt-3 font-heading text-2xl text-text">{label}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{description}</p>
    </button>
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
