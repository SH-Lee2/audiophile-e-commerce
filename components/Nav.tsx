"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

const Nav = ({ styles }: { styles?: string }) => {
	const segment = useSelectedLayoutSegment();

	return (
		<ul
			className={`${styles} flex text-[13px] font-[700] leading-[25px] tracking-[2px] md:space-x-8`}
		>
			<li>
				<Link
					href="/"
					className={
						segment === null ? "text-peru" : "text-white hover:text-tangelo"
					}
				>
					HOME
				</Link>
			</li>
			<li>
				<Link
					href="/headphones"
					className={
						segment === "headphones"
							? "text-peru"
							: "text-white hover:text-tangelo"
					}
				>
					HEADPHONES
				</Link>
			</li>
			<li>
				<Link
					href="/speakers"
					className={
						segment === "speakers"
							? "text-peru"
							: "text-white hover:text-tangelo"
					}
				>
					SPEAKERS
				</Link>
			</li>
			<li>
				<Link
					href="/earphones"
					className={
						segment === "earphones"
							? "text-peru"
							: "text-white hover:text-tangelo"
					}
				>
					EARPHONES
				</Link>
			</li>
		</ul>
	);
};

export default Nav;
