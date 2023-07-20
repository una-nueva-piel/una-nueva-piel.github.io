import { z, defineCollection } from 'astro:content';

const about = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string()
	}),
});

export const collections = {
	'acerca': about,
};
