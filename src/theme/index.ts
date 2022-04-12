import { ThemeColor } from "./types";

export const defaultTheme: {[key: string]: ThemeColor} = {
    primary: {
        background: 'rgba(0, 106, 255, 0.9)',
        foreground: 'rgb(255, 255, 255)'
    },
    secondary: {
        background: 'rgba(255, 255, 255, 0.9)',
        foreground: 'rgb(10, 10, 10)'
    },
    danger: {
        background: 'rgba(210, 20, 50, 0.9)',
        foreground: 'rgba(255, 160, 180, 1)'
    },
    success: {
        background: 'rgba(20, 210, 90, 0.9)',
        foreground: 'rgba(160, 255, 220, 1)'
    }
};