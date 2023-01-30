import Link from "next/link";
import React from "react";

const StudioNavbar = (props: any) => {
	return (
		<div>
			<div className="p-3 font-bold">
				<Link href="/">Go To Website</Link>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
};

export default StudioNavbar;
