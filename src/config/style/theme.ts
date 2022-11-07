import { device } from "./mediaTheme";
import { font } from "./fontTheme";
import { color } from "./colorTheme";

export const theme = {
  color,
  font,
  device,
};

export type Theme = typeof theme;
