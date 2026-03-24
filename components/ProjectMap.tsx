"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import Card from "@/components/Card";
import MapNode from "@/components/MapNode";
import type { Project } from "@/data/projects";

type ProjectMapProps = {
  title: string;
  description: string;
  mapAlt: string;
  mapSrc: string;
  projects: Project[];
};

export default function ProjectMap({
  title,
  description,
  mapAlt,
  mapSrc,
  projects
}: ProjectMapProps) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const activeProject =
    projects.find((project) => project.slug === activeSlug) ?? null;

  return (
    <Card className="h-full p-5 sm:p-6">
      <div className="flex h-full flex-col">
        <p className="text-xs uppercase tracking-[0.26em] text-accent/80">
          Projects by Geography
        </p>
        <h3 className="mt-3 font-heading text-2xl text-text">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted">{description}</p>

        <div className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-border/70 bg-surface-soft/70 p-4 sm:p-6">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl">
            <Image
              src={mapSrc}
              alt={mapAlt}
              fill
              sizes="(min-width: 1024px) 38rem, 100vw"
              className="select-none object-contain opacity-95"
            />

            {projects.map((project) => (
              <MapNode
                key={project.slug}
                project={project}
                isActive={project.slug === activeSlug}
                onSelect={setActiveSlug}
              />
            ))}

            <div className="absolute inset-x-3 bottom-3 rounded-[1.15rem] border border-border/80 bg-surface p-4 shadow-soft sm:inset-x-4 sm:bottom-4">
              {activeProject ? (
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-accent/80">
                      {activeProject.location}
                    </p>
                    <p className="mt-2 text-base font-semibold text-text">
                      {activeProject.name}
                    </p>
                  </div>
                  <Button
                    href={`/projects/${activeProject.slug}`}
                    variant="secondary"
                    size="sm"
                    className="w-fit normal-case tracking-[0.08em]"
                  >
                    View Details
                  </Button>
                </div>
              ) : (
                <p className="text-sm leading-7 text-muted">
                  Tap a node to inspect a project and open its detail page.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
