import { createClient } from "next-sanity";
import { clientConfig } from "./config/client-config";
import imageUrlBuilder from '@sanity/image-url'

const client = createClient(clientConfig)
const builder = imageUrlBuilder(client)

function urlFor(source: any){
    return builder.image(source)
}

export default urlFor