export type ProjectCategory = "india" | "international";

export type Project = {
  name: string;
  location: string;
  coords: {
    top: string;
    left: string;
  };
  slug: string;
  category: ProjectCategory;
  description: string;
};

export const projects: Project[] = [
  {
    name: "CPCL Refinery Project",
    location: "Nagapattinam, India",
    coords: { top: "73%", left: "68%" },
    slug: "cpcl-refinery",
    category: "india",
    description:
      "Placeholder overview for a refinery and downstream infrastructure program in southern India."
  },
  {
    name: "ISRO Structural Support Program",
    location: "Sriharikota, India",
    coords: { top: "59%", left: "71%" },
    slug: "isro-structural-support",
    category: "india",
    description:
      "Placeholder overview for strategic structural engineering support associated with nationally significant space infrastructure."
  },
  {
    name: "Industrial Rehabilitation Assignment",
    location: "Vadodara, India",
    coords: { top: "46%", left: "43%" },
    slug: "industrial-rehabilitation-assignment",
    category: "india",
    description:
      "Placeholder overview for retrofit, rehabilitation, and structural strengthening work in an industrial setting."
  },
  {
    name: "GASCO Pipeline Project",
    location: "Abu Dhabi, UAE",
    coords: { top: "45%", left: "60%" },
    slug: "gasco-pipeline",
    category: "international",
    description:
      "Placeholder overview for a multidisciplinary hydrocarbon pipeline and associated facilities program in the Middle East."
  },
  {
    name: "Offshore Platform Engineering Review",
    location: "Muscat, Oman",
    coords: { top: "49%", left: "58%" },
    slug: "offshore-platform-engineering-review",
    category: "international",
    description:
      "Placeholder overview for offshore platform review work covering in-place behavior, transport, lifting, and structural performance."
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((project) => project.category === category);
}
