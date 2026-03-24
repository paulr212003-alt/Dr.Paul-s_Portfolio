import type { Project } from "@/data/projects";

type MapNodeProps = {
  project: Project;
  isActive: boolean;
  onSelect: (slug: string) => void;
};

export default function MapNode({
  project,
  isActive,
  onSelect
}: MapNodeProps) {
  return (
    <button
      type="button"
      aria-label={project.name}
      onClick={() => onSelect(project.slug)}
      className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 transition duration-300 ${
        isActive ? "scale-110" : "hover:scale-105"
      }`}
      style={{
        left: project.coords.left,
        top: project.coords.top
      }}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <span className="absolute inline-flex h-5 w-5 animate-ping rounded-full bg-accent/35" />
        <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-surface bg-accent shadow-glow" />
      </span>
    </button>
  );
}
