export const THEME_STORAGE_KEY = "sudip-portfolio-theme";
export const THEME_MODE_STORAGE_KEY = "sudip-portfolio-mode";
export const DEFAULT_THEME = "cocoa-elegance";
export const DEFAULT_THEME_MODE = "light";

export const THEMES = [
  {
    id: "cocoa-elegance",
    label: "Cocoa Elegance",
    shortLabel: "Cocoa",
    description: "Soft beige, warm brown, and muted gold."
  },
  {
    id: "pearl-royale",
    label: "Pearl Royale",
    shortLabel: "Pearl",
    description: "Consulting-grade pearl white with royal gold restraint."
  },
  {
    id: "emerald-executive",
    label: "Emerald Executive",
    shortLabel: "Emerald",
    description: "Disciplined green clarity with an executive finish."
  },
  {
    id: "lavender-silk",
    label: "Lavender Silk",
    shortLabel: "Lavender",
    description: "Calm academic elegance with a soft violet identity."
  },
  {
    id: "azure-minimal",
    label: "Azure Minimal",
    shortLabel: "Azure",
    description: "Engineering precision with a clean blue visual system."
  },
  {
    id: "rose-executive",
    label: "Rose Executive",
    shortLabel: "Rose",
    description: "Subtle authority with a restrained rose accent."
  },
  {
    id: "sterling-gold",
    label: "Sterling Gold",
    shortLabel: "Sterling",
    description: "Prestige-driven neutrals with metallic gold emphasis."
  },
  {
    id: "slate-minimal",
    label: "Slate Minimal",
    shortLabel: "Slate",
    description: "Cool gray minimalism with sharp modern contrast."
  }
];

export const THEME_IDS = THEMES.map((theme) => theme.id);
export const THEME_MODES = ["light", "dark"];

export function isValidTheme(value) {
  return THEME_IDS.includes(value);
}

export function isValidThemeMode(value) {
  return THEME_MODES.includes(value);
}
