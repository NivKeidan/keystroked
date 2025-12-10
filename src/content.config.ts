import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/posts', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
            slug: z.string(),
			title: z.string(),
			excerpt: z.string(),
			pubDate: z.coerce.date(),
            readTime: z.string(),
			asciiArt: z.string(),
			tags: z.array(z.string())
		}),
});

export const collections = { blog };