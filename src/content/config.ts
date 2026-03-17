import { defineCollection, z } from 'astro:content';

const tutorialsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(['beginner', 'intermediate', 'advanced']),
    order: z.number(),
    duration: z.string(),
    prerequisites: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
    lang: z.enum(['en', 'zh']).default('en'),
  }),
});

export const collections = {
  'tutorials': tutorialsCollection,
};
