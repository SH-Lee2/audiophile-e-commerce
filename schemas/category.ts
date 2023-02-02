import { defineField, defineType } from "sanity";

export default defineType({
	name: "category",
	title: "Category",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Name",
			type: "string",
		}),
		defineField({
			name: "image",
			title: "Image",
			type: "image",
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: "buttonText",
			title: "ButtonText",
			type: "string",
		}),
		defineField({
			name: "link",
			title: "Link",
			type: "string",
		}),
	],
});
