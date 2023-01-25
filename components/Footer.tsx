import { logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Footer = () => {
	const navStyles =
		"flex-col items-center justify-center gap-y-4 md:flex-row md:gap-y-0";
	return (
		<footer className="footer">
			<div className="flex flex-col items-center justify-center gap-y-12 md:items-start xl:flex-1 xl:gap-y-9">
				<Link href="/">
					<Image src={logo} alt="logo" width={143} height={25} quality={100} />
				</Link>
				<Nav styles={`${navStyles} xl:hidden`} />
				<p className="text-center text-body text-white/50 md:text-start">
					Audiophile is an all in one stop to fulfill your audio needs.
					We&apos;re a small team of music lovers and sound specialists who are
					devoted to helping you get the most out of personal audio. Come and
					visit our demo facility - we&apos;re open 7 days a week.
				</p>
				<p className="text-center text-body text-white/50 md:pt-12 xl:text-start">
					Copyright 2021. All Rights Reserved
				</p>
			</div>
			<div className="hidden xl:flex xl:flex-1 xl:items-start xl:justify-end">
				<Nav styles={navStyles} />
			</div>
		</footer>
	);
};

export default Footer;
