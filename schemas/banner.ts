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
	],
	preview: {
		select: {
			title: "product.name",
		},
	},
});
