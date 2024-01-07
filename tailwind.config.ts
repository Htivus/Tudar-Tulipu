import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "kola-img":
          'url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Ani_-_this_is_the_tulunadu_%28karnataka%2C_India%29_Bhutaradhane_-_Bhuta_ware_the_ani..JPG/1200px-Ani_-_this_is_the_tulunadu_%28karnataka%2C_India%29_Bhutaradhane_-_Bhuta_ware_the_ani..JPG")',
      },
    },
  },
  plugins: [],
};
export default config;
