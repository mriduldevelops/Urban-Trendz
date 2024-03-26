import { defineType, defineField } from 'sanity'

export const category = defineType({
  type: "document",
  name: "category",
  title: "Categories",
  fields: [
    defineField({ type: "string", name: "name", title: "Name of Category" }),
  ],
});

