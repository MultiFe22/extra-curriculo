/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#f9fafb",
        "gray-25": "#fcfcfd",
        "gray-500": "#667085",
        "gray-200": "#eaecf0",
        "gray-600": "#475467",
        white: "#fff",
        "gray-300": "#d0d5dd",
        "gray-700": "#344154",
        "brand-50": "#f9f5ff",
        "brand-600": "#7e56d9",
        "gray-900": "#101828",
        "gray-100": "#f2f4f7",
        "blue-gray-50": "#f8f9fc",
        "blue-gray-700": "#363e72",
        "purple-50": "#f4f3ff",
        "purple-700": "#5925dc",
        "orange-50": "#fff6ed",
        "orange-700": "#c4320a",
        "pink-50": "#fdf2fa",
        "pink-700": "#c11574",
        "blue-light-50": "#f0f9ff",
        "blue-light-700": "#026aa2",
        "brand-700": "#6941c6",
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e0e0e3",
        },
        "gray-800": "#1d2939",
      },
      spacing: {},
      fontFamily: {
        "text-md-regular": "Inter",
      },
      borderRadius: {
        "181xl": "200px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      "11xl": "30px",
      xl: "20px",
      "41xl": "60px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}

