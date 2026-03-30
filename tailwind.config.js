/** @type {import('tailwindcss').Config */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      /* ============================================
         COLORS - Mapped from assets/css/style.css
         ============================================ */
      colors: {
        // Surface Colors
        surface: {
          DEFAULT: 'var(--color-surface, #0b0f19)',
          container: 'var(--color-surface-container, #111827)',
          low: 'var(--color-surface-container-low, #1c1f2a)',
          high: 'var(--color-surface-container-high, #1f2937)',
          highest: 'var(--color-surface-container-highest, #313540)',
          dim: 'var(--color-surface-dim, #0f131d)',
        },
        // Text & Content Colors
        onSurface: {
          DEFAULT: 'var(--color-on-surface, #dfe2f1)',
          variant: 'var(--color-on-surface-variant, #c7c4d7)',
          muted: 'var(--color-on-surface-muted, #64748b)',
        },
        // Brand & Status Colors
        primary: {
          DEFAULT: 'var(--color-primary, #6366f1)',
          container: 'var(--color-primary-container, #6366f1)',
          foreground: 'var(--color-on-primary, #ffffff)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary, #c0c1ff)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary, #ffb783)',
          light: 'var(--color-tertiary-light, #FED7AA)',
        },
        error: {
          DEFAULT: 'var(--color-error, #ef4444)',
        },
        success: {
          DEFAULT: 'var(--color-success, #10b981)',
        },
        // Utility Colors
        outlineVariant: {
          DEFAULT: 'var(--color-outline-variant, #464554)',
        },
      },

      /* ============================================
         FONT FAMILIES
         ============================================ */
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
        headline: ['Syne', 'sans-serif'],
      },

      /* ============================================
         FONT SIZES & LINE HEIGHTS
         ============================================ */
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },

      /* ============================================
         BACKDROP FILTERS
         ============================================ */
      backdropBlur: {
        '20': '20px',
      },

      /* ============================================
         BORDER RADIUS
         ============================================ */
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.625rem',
        'lg': '0.75rem',
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
        'full': '9999px',
      },

      /* ============================================
         SPACING
         ============================================ */
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },

      /* ============================================
         Z-INDEX
         ============================================ */
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      /* ============================================
         BOX SHADOW
         ============================================ */
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-sm': '0 0 10px rgba(99, 102, 241, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(99, 102, 241, 0.1)',
      },

      /* ============================================
         GRADIENTS
         ============================================ */
      backgroundImage: {
        'obsidian-gradient': 'radial-gradient(circle at top left, rgba(192, 193, 255, 0.08), transparent 40%), var(--color-surface-dim, #0f131d)',
        'indigo-glow': 'radial-gradient(circle at top left, rgba(192, 193, 255, 0.08), transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(192, 193, 255, 0.05) 0%, rgba(28, 31, 42, 0) 100%)',
        'glass-gradient-strong': 'linear-gradient(135deg, rgba(192, 193, 255, 0.08) 0%, rgba(15, 19, 29, 0) 100%)',
      },

      /* ============================================
         ANIMATION
         ============================================ */
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'fade-out': 'fadeOut 0.3s ease-in-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-in-up': 'slideInUp 0.3s ease-out',
        'slide-in-down': 'slideInDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)' },
        },
      },

      /* ============================================
         TRANSITION TIMING
         ============================================ */
      transitionTimingFunction: {
        'sidebar': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
};
