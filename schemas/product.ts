import { defineField, defineType } from "sanity";

export default defineType({
	name: "product",
	title: "Product",
	type: "document",
	fields: [
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
		{
			name: "newProduct",
			title: "New Product",
			type: "boolean",
			initialValue: false,
		},
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "name",
				maxLength: 90,
			},
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "reference",
			to: { type: "category" },
		}),
		defineField({
			name: "des",
			title: "Des",
			type: "string",
		}),
		defineField({
			name: "price",
			title: "Price",
			type: "number",
		}),
		defineField({
			name: "features",
			title: "Features",
			type: "array",
			of: [
				{
					name: "feature",
					title: "Feature",
					type: "string",
				},
			],
		}),
		defineField({
			name: "inTheBox",
			title: "In The Box",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "amount",
							title: "Amount",
							type: "string",
						},
						{
							name: "components",
							title: "Components",
							type: "string",
						},
					],
					preview: {
						select: {
							title: "components",
							subtitle: "amount",
						},
					},
				},
			],
		}),
		defineField({
			name: "productDesImage",
			title: "Product Des Image",
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
	],
	preview: {
		select: {
			title: "name",
		},
	},
});
