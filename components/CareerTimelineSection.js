import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { careerProjects } from "@/data/careerTimeline";

const groupedTimeline = careerProjects.reduce((groups, project, index) => {
  const key = `${project.rolePeriod}|${project.roleTitle}|${project.organization}`;
  const lastGroup = groups[groups.length - 1];

  if (lastGroup && lastGroup.key === key) {
    lastGroup.projects.push(project);
    lastGroup.endIndex = index;
    return groups;
  }

  groups.push({
    key,
    rolePeriod: project.rolePeriod,
    roleTitle: project.roleTitle,
    organization: project.organization,
    startIndex: index,
    endIndex: index,
    projects: [project]
  });

  return groups;
}, []);

export default function CareerTimelineSection() {
  const totalProjects = careerProjects.length;

  return (
    <Section
      id="experience"
      title="Career Timeline"
      actions={
        <Button
          href="/career-timeline-table"
          variant="secondary"
          size="sm"
          className="normal-case tracking-[0.08em]"
        >
          View Table
        </Button>
      }
    >
      <div className="space-y-8 lg:hidden">
        {groupedTimeline.map((group, groupIndex) => (
          <Reveal key={group.key} delay={`${groupIndex * 0.03}s`}>
            <div className="grid grid-cols-[minmax(0,0.82fr)_1.75rem_minmax(0,1.18fr)] gap-2.5 sm:grid-cols-[minmax(0,0.92fr)_2rem_minmax(0,1.08fr)] sm:gap-3">
              <div
                className="relative flex h-full items-center justify-end pr-3 text-right sm:pr-4"
                style={{ gridRow: `span ${group.projects.length} / span ${group.projects.length}` }}
              >
                <div className="career-bracket absolute bottom-5 right-0 top-5 w-6 rounded-r-[1.15rem] border-b border-r border-t sm:w-8 sm:rounded-r-[1.35rem]" />
                <RoleHighlightCard
                  className="relative z-10 ml-auto max-w-[8.5rem] sm:max-w-[11rem]"
                  period={group.rolePeriod}
                  role={group.roleTitle}
                  organization={group.organization}
                />
              </div>

              {group.projects.map((project) => (
                <div key={project.detailsHref} className="contents">
                  <div className="relative flex justify-center">
                    <div className="career-axis absolute inset-y-0 w-px" />
                    <span className="relative z-10 mt-5 h-4 w-4 rounded-full border-4 border-bg bg-accent shadow-glow" />
                  </div>

                  <TimelineProjectCard project={project} />
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 hidden lg:block">
        <div className="overflow-x-auto pb-6">
          <div
            className="relative mx-auto h-[33rem] px-16"
            style={{ minWidth: `${Math.max(totalProjects, 10) * 14.5}rem` }}
          >
            <div className="career-axis absolute inset-x-16 top-[15rem] h-px" />

            {careerProjects.map((project, index) => {
              const position = getProjectPosition(index, totalProjects);

              return (
                <div key={project.detailsHref}>
                  <div
                    className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-bg bg-accent shadow-glow"
                    style={{ left: `${position}%`, top: "15rem" }}
                  />
                  <div
                    className="absolute w-56 -translate-x-1/2"
                    style={{ left: `${position}%`, top: "1.25rem" }}
                  >
                    <TimelineProjectCard project={project} compact />
                  </div>
                </div>
              );
            })}

            {groupedTimeline.map((group) => {
              const start = getProjectPosition(group.startIndex, totalProjects);
              const end = getProjectPosition(group.endIndex, totalProjects);
              const center = (start + end) / 2;
              const spanWidth = Math.max(end - start, 0);
              const hasSpan = group.projects.length > 1;

              return (
                <div key={group.key}>
                  {hasSpan ? (
                    <>
                      <div
                        className="career-bracket-line absolute h-10 w-px"
                        style={{ left: `${start}%`, top: "15rem" }}
                      />
                      <div
                        className="career-bracket-line absolute h-10 w-px"
                        style={{ left: `${end}%`, top: "15rem" }}
                      />
                      <div
                        className="career-bracket-line absolute h-px"
                        style={{
                          left: `${start}%`,
                          top: "17.5rem",
                          width: `${spanWidth}%`
                        }}
                      />
                    </>
                  ) : (
                    <div
                      className="career-bracket-line absolute h-10 w-px"
                      style={{ left: `${center}%`, top: "15rem" }}
                    />
                  )}

                  <div
                    className="absolute w-48 -translate-x-1/2"
                    style={{ left: `${center}%`, top: "19.25rem" }}
                  >
                    <RoleHighlightCard
                      period={group.rolePeriod}
                      role={group.roleTitle}
                      organization={group.organization}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TimelineProjectCard({ project, compact = false }) {
  return (
    <Card className={compact ? "p-4" : "p-4 sm:p-5"}>
      <p className="text-[10px] uppercase tracking-[0.22em] text-accent/80">
        {project.yearRange}
      </p>
      <h3 className="mt-3 font-heading text-2xl text-text">{project.client}</h3>
      <p className="mt-2 text-sm leading-7 text-muted">{project.shortTag}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Button
          href={project.detailsHref}
          variant="secondary"
          size="sm"
          className="normal-case tracking-[0.08em]"
          target="_blank"
          rel="noreferrer"
        >
          Details
        </Button>
        <span className="inline-flex items-center rounded-full border border-accent/20 bg-surface-soft px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {project.projectType}
        </span>
      </div>
    </Card>
  );
}

function RoleHighlightCard({ period, role, organization, className = "" }) {
  return (
    <div
      className={`rounded-[1.2rem] border border-accent/20 bg-surface px-4 py-3 shadow-soft ${className}`.trim()}
    >
      <p className="text-[10px] uppercase tracking-[0.2em] text-accent/80">
        {period}
      </p>
      <p className="mt-2 text-sm font-semibold leading-6 text-text">{role}</p>
      <p className="mt-1 text-[11px] leading-5 text-muted">{organization}</p>
    </div>
  );
}

function getProjectPosition(index, totalProjects) {
  if (totalProjects <= 1) {
    return 50;
  }

  return 6 + (88 * index) / (totalProjects - 1);
}
