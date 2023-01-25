/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		fontFamily: {
			manrope: "var(--manrope-font)",
		},
		extend: {
			colors: {
				peru: "#D87D4A",
				chineseBlack: "#101010",
				antiFlashWhite: "#F1F1F1",
				lotion: "#FAFAFA",
				tangelo: "#FBAF85",
				white: "#FFFFFF",
				black: "#000000",
				red: "#CD2C2C",
				silver: "#CFCFCF",
			},
			fontSize: {
				h1: [
					"56px",
					{ lineHeight: "58px", letterSpacing: "2px", fontWeight: 700 },
				],
				h2: [
					"40px",
					{ lineHeight: "44px", letterSpacing: "1.5px", fontWeight: 700 },
				],
				h3: [
					"32px",
					{ lineHeight: "36px", letterSpacing: "1.15px", fontWeight: 700 },
				],
				h4: [
					"28px",
					{ lineHeight: "38px", letterSpacing: "2px", fontWeight: 700 },
				],
				h5: [
					"24px",
					{ lineHeight: "33px", letterSpacing: "1.7px", fontWeight: 700 },
				],
				h6: [
					"18px",
					{ lineHeight: "24px", letterSpacing: "1.3px", fontWeight: 700 },
				],
				overline: [
					"14px",
					{ lineHeight: "19px", letterSpacing: "10px", fontWeight: 400 },
				],
				subTitle: [
					"13px",
					{ lineHeight: "25px", letterSpacing: "1px", fontWeight: 700 },
				],
				body: ["15px", { lineHeight: "25px", fontWeight: 500 }],
			},
		},
	},
	plugins: [],
};
