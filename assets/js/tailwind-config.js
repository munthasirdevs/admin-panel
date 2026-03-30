// XenonOS Global Tailwind Configuration
// Centralized theme for 31 admin panel pages

tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "var(--color-primary)",
                "on-primary": "var(--color-on-primary)",
                "secondary": "var(--color-secondary)",
                "tertiary": "var(--color-tertiary)",
                "tertiary-light": "var(--color-tertiary-light)",
                "surface": "var(--color-surface)",
                "surface-dim": "var(--color-surface-dim)",
                "surface-container-low": "var(--color-surface-container-low)",
                "surface-container": "var(--color-surface-container)",
                "surface-container-high": "var(--color-surface-container-high)",
                "surface-container-highest": "var(--color-surface-container-highest)",
                "on-surface": "var(--color-on-surface)",
                "on-surface-variant": "var(--color-on-surface-variant)",
                "on-surface-muted": "var(--color-on-surface-muted)",
                "outline-variant": "var(--color-outline-variant)",
                "background": "var(--color-surface)",
                "error": "var(--color-error)",
                "success": "var(--color-success)",
            },
            fontFamily: {
                "headline": ["Syne", "sans-serif"],
                "body": ["Outfit", "sans-serif"],
                "label": ["Outfit", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "3xl": "1.5rem",
                "full": "9999px"
            },
        },
    },
}
