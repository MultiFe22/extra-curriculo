/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-50": "#f9fafb",
        white: "#fff",
        "gray-500": "#667085",
        "gray-200": "#eaecf0",
        "gray-600": "#475467",
        "gray-300": "#d0d5dd",
        "gray-700": "#344154",
        "brand-600": "#7e56d9",
        "gray-100": "#f2f4f7",
        "brand-50": "#f9f5ff",
        "success-50": "#ecfdf3",
        "success-700": "#037a48",
        "gray-900": "#101828",
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
        slateblue: "#6941c6",
        "gray-25": "#fcfcfd",
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
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq1920: {
        raw: "screen and (min-width: 769px) and (max-width: 1920px)",
      },
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      mq825: {
        raw: "screen and (min-width: 769px) and (max-width: 825px)",
      },
      mq768: {
        raw: "screen and (max-width: 768px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq375: {
        raw: "screen and (max-width: 375px)",
      },
      mq133: {
        raw: "screen and (max-width: 133px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};