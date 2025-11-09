/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  
  colors: {
  primary: {
    black: '#000000',
    gold: '#FFD700',
  },
  background: {
    dark: '#0A0A0A',     // Casi negro
    card: '#1A1A1A',     // Negro con un toque de claridad
  },
  text: {
    light: '#F5F5F5',    // Blanco roto
    muted: '#A3A3A3',    // Gris para texto secundario
  },
  theme: {
    extend: {
      fontFamily: {
        merri : ['Merriweather', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
}
}

