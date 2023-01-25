import "../../styles/globals.css";
import { Manrope } from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
	variable: "--manrope-font",
	weight: ["400", "500", "700"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={manrope.variable}>
			<head />
			<body className="font-manrope">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
