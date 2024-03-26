import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
    projectId: "qry6xxii",
    dataset: "production",
    apiVersion: "2024-03-11",
    useCdn: true,
})

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source)
}