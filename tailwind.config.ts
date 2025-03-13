import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const config: Config = {
   darkMode: "class", // dark modunu class ile yönetiyorsun, buna göre ayarladım
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--color-background)",
            foreground: "var(--color-foreground)",
            primary: "var(--color-primary)",
            secondary: "var(--color-secondary)",
            accent: "var(--color-accent)",
            muted: "var(--color-muted)",
            destructive: "var(--color-destructive)",
            border: "var(--color-border)",
            ring: "var(--color-ring)",
            input: "var(--color-input)",
         },
         borderRadius: {
            sm: "var(--radius-sm)",
            md: "var(--radius-md)",
            lg: "var(--radius-lg)",
            xl: "var(--radius-xl)",
         },
         fontFamily: {
            sans: ["var(--font-sans)", "sans-serif"],
            mono: ["var(--font-mono)", "monospace"],
         },
      },
   },
   plugins: [
      animatePlugin,
      function ({ addVariant }) {
         addVariant("dark", "&:is(.dark *)");
      },
   ],
};

export default config;
