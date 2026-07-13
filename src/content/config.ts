import { defineCollection, z } from 'astro:content';
import { categorySlugs } from '../config';

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    imageAlt: z.string().optional(),
    category: z.enum(categorySlugs),
    author: z.string().default('Jivant News Desk'),
    pubDate: z.coerce.date()
  })
});

export const collections = { news };
