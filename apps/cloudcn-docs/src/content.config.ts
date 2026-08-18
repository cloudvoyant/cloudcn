// apps/cloudcn-docs/src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    group: z.enum(['general', 'components']).default('general'),
    order: z.number().default(0),
  }),
});

export const collections = { docs };
