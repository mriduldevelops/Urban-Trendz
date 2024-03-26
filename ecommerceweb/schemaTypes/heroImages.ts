import { defineType, defineField } from 'sanity'

export const heroImages = defineType({
    type: "document",
    name: "heroImage",
    title: "Two Hero Images",
    fields: [
      defineField({ type: "image", name: "image1", title: "First Image" }),
      defineField({ type: "image", name: "image2", title: "Second Image" }),
    ],
  });
  
