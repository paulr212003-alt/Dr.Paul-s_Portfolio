import Button from "@/components/Button";
import Card from "@/components/Card";
import { careerTimelineTable } from "@/data/careerTimeline";

export const metadata = {
  title: "Career Timeline Table | Dr. Sudip Paul",
  description: "Structured timeline table for Dr. Sudip Paul's career history."
};

export default function CareerTimelineTablePage() {
  return (
    <main className="page-shell min-h-screen px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8">
        <Button
          href="/#experience"
          variant="secondary"
          size="sm"
          className="w-fit normal-case tracking-[0.08em]"
        >
          Back to Timeline
        </Button>

        <Card className="overflow-hidden">
          <div className="border-b border-border/70 px-5 py-5 sm:px-6">
            <p className="text-xs uppercase tracking-[0.26em] text-accent/80">
              Career Timeline
            </p>
            <h1 className="mt-3 font-heading text-3xl text-text sm:text-4xl">
              Career Timeline Table
            </h1>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="border-b border-border/70 bg-surface-soft/50">
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Year
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Type
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Title
                  </th>
                  <th className="px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                    Subtitle
                  </th>
                </tr>
              </thead>
              <tbody>
                {careerTimelineTable.map((item) => (
                  <tr
                    key={`${item.year}-${item.type}-${item.title}`}
                    className="border-b border-border/55 last:border-b-0"
                  >
                    <td className="px-5 py-3 text-sm text-text">{item.year}</td>
                    <td className="px-5 py-3 text-sm text-accent">{item.type}</td>
                    <td className="px-5 py-3 text-sm text-text">{item.title}</td>
                    <td className="px-5 py-3 text-sm text-muted">
                      {item.subtitle}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </main>
  );
}
