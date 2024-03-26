import { defineType, defineField, defineArrayMember } from 'sanity'

export const product = defineType({
  type: "document",
  name: "product",
  title: "Product",
  fields: [
    defineField({ type: "string", name: "name", title: "Name of Product" }),
    defineField({ type: "slug", name: "slug", options: { source: "name" } }),
    defineField({ type: "text", name: "description", title: 'Description of Product' }),
    defineField({ type: "number", name: "price", title: "Price" }),
    defineField({ type: 'string', name: 'price_id', title: 'Stripe Price ID' }),
    defineField({
      type: "array",
      name: "images",
      of: [defineArrayMember({ type: "image", options: { hotspot: true } })],
    }),
    defineField({
      type: "reference",
      name: "category",
      title: "Product Category",
      to: [{ type: "category" }],
    }),
  ],
});

// export default {
//   type: "document",
//   name: "product",
//   title: 'Product',
//   fileds: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Name of Product'
//     },
//     {
//       name: 'images',
//       type: 'array',
//       title: 'Product Images',
//       of: [{type: 'image'}],
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description of Product'
//     },
//     {
//       name: 'slug',
//       type: 'slug',
//       title: 'Product Slug'
//     },

//     {
//       name: 'price',
//       type: 'number',
//       title: 'Price'
//     }
//   ]
// }