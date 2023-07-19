import { createClient, groq } from "next-sanity"
import { clientConfig } from "./config/client-config"
import { Post } from "@/types/Post"

export const getPosts = async (): Promise<Post[]> => {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'post' ]{
            _id,
            _createdAt,
            _updatedAt,
            title,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            "image_alt": image.alt,
            "tags": tags,
            content,
        }`
    )
}

export const getPost = async (slug:string): Promise<Post> => {
    return createClient(clientConfig).fetch(
        groq`*[_type == 'post' && slug.current == $slug][0]{
            _id,
            _createdAt,
            _updatedAt,
            title,
            description,
            "slug": slug.current,
            "image": image.asset->url,
            "image_alt": image.alt,
            "tags": tags,
            content,
        }`, {slug}
    )
}