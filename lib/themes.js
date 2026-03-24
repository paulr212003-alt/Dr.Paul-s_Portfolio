export const THEME_STORAGE_KEY = "sudip-portfolio-theme";
export const DEFAULT_THEME = "cocoa-elegance";

export const THEMES = [
  {
    id: "cocoa-elegance",
    label: "Cocoa Elegance",
    scheme: "light",
    description: "Soft beige, warm brown, and muted gold."
  },
  {
    id: "nebula-noir",
    label: "Nebula Noir",
    scheme: "dark",
    description: "Purple-black surfaces with a refined violet accent."
  },
  {
    id: "emerald-executive",
    label: "Emerald Executive",
    scheme: "light",
    description: "Off-white surfaces with a disciplined emerald tone."
  },
  {
    id: "midnight-blue",
    label: "Midnight Blue",
    scheme: "dark",
    description: "Navy-black depth with restrained blue emphasis."
  }
];

export const THEME_IDS = THEMES.map((theme) => theme.id);

export function isValidTheme(value) {
  return THEME_IDS.includes(value);
}
