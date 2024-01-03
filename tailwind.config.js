/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-border-border-primary": "var(--base-border-border-primary)",
        "base-content-high-emphasis": "var(--base-content-high-emphasis)",
        "base-content-low-emphasis": "var(--base-content-low-emphasis)",
        "base-content-medium-emphasis": "var(--base-content-medium-emphasis)",
        "base-departments-finance": "var(--base-departments-finance)",
        "base-departments-marketing": "var(--base-departments-marketing)",
        "base-primary-accent": "var(--base-primary-accent)",
        "base-primary-accent-light": "var(--base-primary-accent-light)",
        "primitives-midnight-midnight-100": "var(--primitives-midnight-midnight-100)",
        "primitives-neutral-white": "var(--primitives-neutral-white)",
        "primitives-purple-purple-300": "var(--primitives-purple-purple-300)",
        "primitives-purple-purple-50": "var(--primitives-purple-purple-50)",
      },
      fontFamily: {
        "heading-heading-4": "var(--heading-heading-4-font-family)",
        "other-detail-xsmall-bold": "var(--other-detail-xsmall-bold-font-family)",
        "paragraph-bold-small-bold": "var(--paragraph-bold-small-bold-font-family)",
        "paragraph-regular-small": "var(--paragraph-regular-small-font-family)",
        "paragraph-regular-xsmall": "var(--paragraph-regular-xsmall-font-family)",
      },
      boxShadow: {
        "button-btn-primary": "var(--button-btn-primary)",
      },
    },
  },
  plugins: [],
};
