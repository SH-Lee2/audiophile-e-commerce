import Banner from "@/components/Banner";
import Category from "@/components/Category";
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

const bannerQuery = groq`*[_type == 'banner'][0]{
  ..., product->{...}
}`;

export default async function Home() {
	const bannerInfo: Banner = await client.fetch(bannerQuery);

	return (
		<main className="flex flex-col gap-y-[120px]">
			<Banner bannerInfo={bannerInfo} />
			<Category />
		</main>
	);
}
