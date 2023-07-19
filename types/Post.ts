import { PortableTextBlock } from "sanity";

export type Post = {
    _id: string,
    _createdAt: Date,
    _updatedAt: Date,
    title: string,
    tags: string[]
    description: string,
    slug: string,
    image: string,
    image_alt: string,
    content: PortableTextBlock[],
}