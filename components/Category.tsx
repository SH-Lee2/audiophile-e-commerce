"use client";
import { client } from "@/lib/sanity.client";
import urlFor from "@/lib/urlFor";
import { rightArrow } from "@/public";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const query = groq`*[_type == 'category']{
  ...
}`;

const Category = () => {
	const [categorys, setCategorys] = useState<Array<Category>>([]);

	useEffect(() => {
		const getCategory = async () => {
			const data: Array<Category> = await client.fetch(query);
			setCategorys(data);
		};

		getCategory();
	}, []);

	return (
		<div className="flex flex-col gap-y-[68px] px-6 md:flex-row md:gap-y-0 md:gap-x-[10px] xl:gap-x-[30px]">
			{categorys.map((category) => (
				<Link
					key={category._id}
					href={category.link}
					className="flex w-full  text-[13px] font-bold leading-[17.76px] tracking-[1px] text-black hover:text-peru"
				>
					<div
						key={category._id}
						className=" flex w-full cursor-pointer flex-col items-center justify-between rounded-lg bg-antiFlashWhite py-5 "
					>
						<Image
							src={urlFor(category.image).url()}
							alt="category image"
							width={160}
							height={200}
							className="-mt-16"
						/>
						<div className="flex flex-col items-center justify-center">
							<p className="pb-4 text-[15px] font-bold leading-[20.49px] tracking-[1.07px] text-black">
								{category.name}
							</p>

							<div className="flex items-center gap-x-2 ">
								<span>{category.buttonText}</span>
								<Image
									src={rightArrow}
									alt="extand icon"
									width={5}
									height={10}
								/>
							</div>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Category;
