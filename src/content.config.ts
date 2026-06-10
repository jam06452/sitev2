// src/content.config.ts
import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()).optional(),
      description: z.string(),
      image: image().optional(),
      github: z.string().url().optional(),
      date: z.string().optional(),
      featured: z.boolean().default(false),
      links: z
        .array(
          z.object({
            label: z.string(),
            url: z.string().url(),
            icon: z.enum(["globe", "link", "youtube", "download", "bp"]).optional(),
            variant: z.enum(["default", "outline", "secondary", "ghost", "destructive", "link", "blueprint"]).optional(),
          })
        )
        .optional(),
    }),
})

export const collections = { projects }
