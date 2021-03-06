module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#e24717",
                    muted: "#FFE7E0",
                    grayed: "#EDCFC6",
                    dark: "#E17C5D",
                    dark2: "#E67F5F",
                    darker: "#741F04",
                },
                secondary: {
                    DEFAULT: "#f0af6d",
                    light: "#ffe2da",
                },
            },
            borderRadius: {
                "8xl": "3rem",
                "16xl": "6rem",
            },
            screens: {
                lgxl: "1140px",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
