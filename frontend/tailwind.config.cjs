// tailwind.config.cjs
module.exports = {
  darkMode: ["class"],
  content: [
  "./app/**/*.{ts,tsx,js,jsx}",
  "./components/**/*.{ts,tsx,js,jsx}",
  "./styles/**/*.css"   // <-- use this pattern (not ./styles/**/*.{css})
],

  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" }
      },
      borderRadius: {
        xl: "1rem",
        lg: "calc(var(--radius) - 2px)",
        md: "calc(var(--radius) - 4px)",
        sm: "calc(var(--radius) - 6px)"
      },
      boxShadow: {
        panel: "0 24px 60px -32px rgba(14, 116, 232, 0.35)"
      },
      backgroundImage: {
        "medical-gradient": "radial-gradient(circle at top left, rgba(59, 130, 246, 0.18), transparent 42%), radial-gradient(circle at bottom right, rgba(14, 165, 233, 0.18), transparent 34%)"
      }
    }
  },
  plugins: []
};
