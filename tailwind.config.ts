import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        "ink-muted": "#4a4f55",
        rule: "#d9dcdf",
        paper: "#f8f9fa",
        flag: {
          red: "#be1111",
          green: "#0a5c27",
          "green-hover": "#0d7131",
        },
        katiba: {
          green: "#0a5c27",
          "green-dark": "#07421c",
          "green-light": "#e8f5ed",
          red: "#be1111",
          "red-dark": "#8a0c0c",
          "red-light": "#fdf2f2",
          black: "#111111",
          gray: {
            50: "#f8f9fa",
            100: "#f1f3f5",
            200: "#e9ecef",
            300: "#dee2e6",
            400: "#ced4da",
            600: "#495057",
            800: "#212529",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        card: "2px",
        control: "4px",
      },
    },
  },
  plugins: [],
};
export default config;
