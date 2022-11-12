/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctorthem: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          accent: "#37CDBE",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        }

      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
