tailwind.config = {
  theme: {
    extend: {
      colors: {
        border: 'hsl(25 20% 88%)',
        input: 'hsl(25 20% 88%)',
        ring: 'hsl(25 95% 53%)',
        background: 'hsl(40 30% 97%)',
        foreground: 'hsl(25 20% 6%)',
        primary: {
          DEFAULT: 'hsl(25 95% 53%)',
          foreground: 'hsl(0 0% 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(25 20% 92%)',
          foreground: 'hsl(25 25% 15%)',
        },
        muted: {
          DEFAULT: 'hsl(40 20% 94%)',
          foreground: 'hsl(25 15% 40%)',
        },
        destructive: {
          DEFAULT: 'hsl(0 84% 60%)',
          foreground: 'hsl(0 0% 100%)',
        },
        success: {
          DEFAULT: 'hsl(142 76% 36%)',
          foreground: 'hsl(0 0% 100%)',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
      },
    },
  },
}
