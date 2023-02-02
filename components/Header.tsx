"use client";

import { bar, cart, logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Category from "./Category";
import Nav from "./Nav";

const Header = () => {
	const [sidebar, setSideber] = useState(false);

	return (
		<header className="header">
			<div className="flex w-full justify-between border-b-[1px] border-white/25 px-6 py-8 md:px-10 xl:px-[165px]">
				<div className="hidden md:flex md:gap-x-[42px]">
					<Image
						src={bar}
						alt="sidebar open button"
						width={16}
						height={15}
						className="cursor-pointer xl:hidden"
						onClick={() => setSideber((pre) => !pre)}
					/>
					<Link href="/">
						<Image
							src={logo}
							alt="logo"
							width={143}
							height={25}
							quality={100}
						/>
					</Link>
				</div>
				<div className="w-full md:w-auto">
					<div className="flex w-full justify-between">
						<Image
							src={bar}
							alt="sidebar open button"
							width={16}
							height={15}
							onClick={() => setSideber((pre) => !pre)}
							className="cursor-pointer md:hidden"
						/>
						<Link href="/" className="md:hidden">
							<Image
								src={logo}
								alt="logo"
								width={143}
								height={25}
								quality={100}
							/>
						</Link>
						<div className="flex gap-x-[317px]">
							<Nav styles="hidden xl:flex" />
							<Image
								src={cart}
								alt="sidebar open button"
								width={23}
								height={20}
								className="cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
			{sidebar && (
				<div className="w-full bg-white pb-[35px] pt-[84px] transition-all duration-200 md:pt-[108px] md:pb-[67px]  xl:hidden">
					<Category />
				</div>
			)}
		</header>
	);
};

export default Header;
