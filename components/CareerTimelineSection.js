import Button from "@/components/Button";
import Card from "@/components/Card";
import Reveal from "@/components/Reveal";
import Section from "@/components/Section";
import { careerProjects } from "@/data/careerTimeline";

export default function CareerTimelineSection() {
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
        {careerProjects.map((item, index) => (
          <Reveal key={item.detailsHref} delay={`${index * 0.03}s`}>
            <div className="grid grid-cols-[minmax(0,0.82fr)_1.75rem_minmax(0,1.18fr)] gap-2.5 sm:grid-cols-[minmax(0,0.95fr)_2.5rem_minmax(0,1.1fr)] sm:gap-3">
              <div className="pt-5 text-right">
                <div className="ml-auto max-w-[8.75rem] rounded-[1.25rem] border border-accent/25 bg-surface px-2.5 py-3 shadow-soft sm:max-w-[12rem] sm:rounded-[1.35rem] sm:px-3 sm:py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent/80">
                    {item.rolePeriod}
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-text">
                    {item.roleTitle}
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-muted">
                    {item.organization}
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="career-axis absolute inset-y-0 w-px" />
                <span className="relative z-10 mt-5 h-4 w-4 rounded-full border-4 border-bg bg-accent shadow-glow" />
              </div>

              <Card className="p-4 sm:p-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-accent/80">
                  {item.yearRange}
                </p>
                <h3 className="mt-3 font-heading text-2xl text-text">
                  {item.client}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted">
                  {item.shortTag}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <Button
                    href={item.detailsHref}
                    variant="secondary"
                    size="sm"
                    className="normal-case tracking-[0.08em]"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Details
                  </Button>
                  <span className="inline-flex items-center rounded-full border border-accent/20 bg-surface-soft px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {item.projectType}
                  </span>
                </div>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 hidden lg:block">
        <div className="overflow-x-auto pb-6">
          <div
            className="relative mx-auto h-[38rem] px-16"
            style={{ minWidth: `${careerProjects.length * 18}rem` }}
          >
            <div className="career-axis absolute inset-x-16 top-1/2 h-px -translate-y-1/2" />

            {careerProjects.map((item, index) => {
              const total = careerProjects.length - 1;
              const position = 6 + (88 * index) / total;
              const isTopCard = index % 2 === 0;

              return (
                <div key={item.detailsHref}>
                  <div
                    className="absolute h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-bg bg-accent shadow-glow"
                    style={{ left: `${position}%`, top: "50%" }}
                  />

                  <div
                    className="absolute w-56 -translate-x-1/2"
                    style={{
                      left: `${position}%`,
                      top: isTopCard ? "1.5rem" : "20.5rem"
                    }}
                  >
                    <Card className="p-5">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-accent/80">
                        {item.yearRange}
                      </p>
                      <h3 className="mt-3 font-heading text-2xl text-text">
                        {item.client}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-muted">
                        {item.shortTag}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <Button
                          href={item.detailsHref}
                          variant="secondary"
                          size="sm"
                          className="normal-case tracking-[0.08em]"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Details
                        </Button>
                        <span className="inline-flex items-center rounded-full border border-accent/20 bg-surface-soft px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                          {item.projectType}
                        </span>
                      </div>
                    </Card>
                  </div>

                  <div
                    className="absolute w-44 -translate-x-1/2"
                    style={{
                      left: `${position}%`,
                      top: isTopCard ? "25.75rem" : "8.2rem"
                    }}
                  >
                    <div className="rounded-[1.2rem] border border-accent/20 bg-surface px-4 py-3 text-center shadow-soft">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-accent/80">
                        {item.rolePeriod}
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-text">
                        {item.roleTitle}
                      </p>
                      <p className="mt-1 text-[11px] leading-5 text-muted">
                        {item.organization}
                      </p>
                    </div>
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
