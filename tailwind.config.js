import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const colorsDef = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            ...colorsDef,
            "dark-blue": "#001126",
            "dark-blue-base": "#001126",
            "dark-blue-hover": "#052040",
            "green-1": "#2accb0",
            "green-2": "#24b3b3",
            "dark-purple": "#081A51",
            "light-white": "rgba(255,255,255,0.17)",
        },
    },

    plugins: [forms],
};
