"use client";
import urlFor from "@/lib/urlFor";
import Image from "next/image";

import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
	bannerInfo: Banner;
};

const Banner = ({ bannerInfo }: Props) => {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		const windowResizeHandler = () => {
			setWidth(window.innerWidth);
		};
		window.addEventListener("resize", windowResizeHandler);

		return () => window.removeEventListener("resize", windowResizeHandler);
	});

	return (
		<section className="h-[calc(100vh-90px)] bg-chineseBlack md:h-[639px] md:px-[165px] xl:h-[632px]">
			<div className="relative h-full w-full">
				<div className="relative h-full w-full">
					<Image
						src={urlFor(
							bannerInfo.image[`${width < 768 ? 0 : width < 1440 ? 1 : 2}`]
						).url()}
						alt="product image"
						fill
						quality={100}
						className="object-cover"
					/>
				</div>

				<div className="absolute top-0  left-1/2 flex h-full w-full max-w-[379px] -translate-x-1/2 flex-col items-center justify-center text-center xl:left-0 xl:translate-x-0 xl:items-start xl:text-start">
					<p className="text-overline text-white/50">{bannerInfo.smallText}</p>
					<h1 className="mt-4 mb-6 text-4xl font-bold tracking-[1.29px] text-white md:text-[56px] md:leading-[58px] md:tracking-[2px]">
						{bannerInfo.product.name}
					</h1>
					<p className="mb-7 text-body text-white/75">{bannerInfo.desc}</p>
					<button className="h-[48px] w-[160px] bg-peru text-[13px] font-bold leading-[17.76px] tracking-[1px] text-white">
						<Link href={bannerInfo.link}>{bannerInfo.buttonText}</Link>
					</button>
				</div>
			</div>
		</section>
	);
};

export default Banner;
