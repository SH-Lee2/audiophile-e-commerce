import { defineField, defineType } from "sanity";

export default defineType({
	name: "banner",
	title: "Banner",
	type: "document",
	fields: [
		defineField({
			name: "buttonText",
			title: "ButtonText",
			type: "string",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
		}),
		defineField({
			name: "product",
			title: "Product",
			type: "reference",
			to: { type: "product" },
		}),
		defineField({
			name: "smallText",
			title: "SmallText",
			type: "string",
		}),
		defineField({
			name: "desc",
			title: "Desc",
			type: "string",
		}),
		defineField({
			name: "link",
			title: "link",
			type: "string",
		}),
	],
	preview: {
		select: {
			title: "product.name",
		},
	},
});
