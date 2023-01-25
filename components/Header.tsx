import { bar, cart, logo } from "@/public";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
	return (
		<header className="header">
			<div className="hidden md:flex md:gap-x-[42px]">
				<Image
					src={bar}
					alt="sidebar open button"
					width={16}
					height={15}
					className="cursor-pointer xl:hidden"
				/>
				<Link href="/">
					<Image src={logo} alt="logo" width={143} height={25} quality={100} />
				</Link>
			</div>

			<Image
				src={bar}
				alt="sidebar open button"
				width={16}
				height={15}
				className="cursor-pointer md:hidden xl:hidden"
			/>
			<Link href="/" className="md:hidden">
				<Image src={logo} alt="logo" width={143} height={25} quality={100} />
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
		</header>
	);
};

export default Header;
