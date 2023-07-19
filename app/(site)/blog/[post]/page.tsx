import { getPost } from '@/sanity/sanity-utils'
import urlFor from '@/sanity/urlFor'
import { PortableText } from '@portabletext/react'
import { getImageDimensions } from '@sanity/asset-utils'
import urlBuilder from '@sanity/image-url'
import Image from 'next/image'
import React from 'react'



type Props = {
    params: {post: string}
}

const richPortableTextComponents = {
  types: {
    image: ( {value}:any ) => {
        return (
            <div className='relative w-full h-96 aspect-video'>
                <Image className='object-contain' src={urlFor(value).url()} alt={value.alt} fill/>
            </div>
        )
    },
  },
  block: {
    h1: ({children}: any) => {
        return <h1 className='text-3xl font-bold'>{children}</h1>
    }
}
}



async function page({params}: Props) {
    const slug = params.post

    const post = await getPost(slug)

    return (
        <div className='flex justify-center items-center my-5'>
            <div className='max-w-3xl'>
                <h1 className='text-3xl font-bold my-5'>{post.title}</h1>
                <div className=' my-5 '>
                <figure className='flex flex-col justify-center items-center'>
                    <div className='relative w-full h-96'>
                        <Image className='object-contain' src={post.image} alt={post.image_alt} fill/>
                    </div>
                    <small>{post.image_alt}</small>
                </figure> 
                </div>
                <div className='leading-relaxed font-inter flex flex-col gap-y-4'>
                    <PortableText value={post.content} components={richPortableTextComponents}/>
                </div>
            </div>
        </div>
    )
}

export default page