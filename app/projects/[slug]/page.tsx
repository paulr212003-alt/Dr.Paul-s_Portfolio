import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page-shell min-h-screen px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8">
        <Button
          href="/#projects"
          variant="secondary"
          size="sm"
          className="w-fit normal-case tracking-[0.08em]"
        >
          Back to Projects
        </Button>

        <Card className="p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.28em] text-accent/80">
            {project.category === "india" ? "India Project" : "International Project"}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl text-text sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-4 text-base leading-8 text-muted">{project.location}</p>
          <p className="mt-8 text-base leading-8 text-muted">
            {project.description}
          </p>
        </Card>
      </div>
    </main>
  );
}
