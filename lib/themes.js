export const THEME_STORAGE_KEY = "sudip-portfolio-theme";
export const DEFAULT_THEME = "cocoa-elegance";

export const THEMES = [
  {
    id: "cocoa-elegance",
    label: "Cocoa Elegance",
    shortLabel: "Cocoa",
    scheme: "light",
    description: "Soft beige, warm brown, and muted gold."
  },
  {
    id: "nebula-noir",
    label: "Nebula Noir",
    shortLabel: "Nebula",
    scheme: "dark",
    description: "Purple-black surfaces with a refined violet accent."
  },
  {
    id: "emerald-executive",
    label: "Emerald Executive",
    shortLabel: "Emerald",
    scheme: "light",
    description: "Off-white surfaces with a disciplined emerald tone."
  },
  {
    id: "midnight-blue",
    label: "Midnight Blue",
    shortLabel: "Midnight",
    scheme: "dark",
    description: "Navy-black depth with restrained blue emphasis."
  },
  {
    id: "ivory-prestige",
    label: "Ivory Prestige",
    shortLabel: "Ivory",
    scheme: "light",
    description: "Warm ivory surfaces with calm brown and beige accents."
  },
  {
    id: "slate-minimal",
    label: "Slate Minimal",
    shortLabel: "Slate",
    scheme: "light",
    description: "Cool gray minimalism with a soft slate accent."
  }
];

export const THEME_IDS = THEMES.map((theme) => theme.id);

export function isValidTheme(value) {
  return THEME_IDS.includes(value);
}
