import Image from 'next/image';
import { Button } from './Button';
import clsx from 'clsx';

type BlogPostCardProps = {
  title?: string
  desc?: string
  postTag?: string[]
  imgSrc?: string

}

function BlogPostCard(props: BlogPostCardProps) {
  return (
    <div className='h-full w-full flex'>
      <div className="border border-gray-200 dark:border-chambray-900 flex flex-col grow">

        <div className='aspect-video relative'>
          <Image src={'/Vanilla-Foods-Enhanced-Mod-Thumbnail-.png'} alt='thumbnail' fill style={{ objectFit: "cover" }} />
        </div>
        <div className='w-full  p-3 flex-grow flex flex-col justify-between'>
          <div className='mb-5 text-chambray-950 dark:text-chambray-50'>
            <div className='text-xl font-bold font-montserrat break-words line-clamp-3 hyphens-manual'>{props.title}</div>
            <div className='mt-2 text-sm font-normal font-inter line-clamp-3 break-words hyphens-manual'>{props.desc}</div>
          </div>
          <div className={clsx('flex flex-wrap gap-1', { "border-t pt-1 dark:border-chambray-800": props.postTag })}>
            {props.postTag && props.postTag.map((tag) => {
              return <Button variant='secondary' label={tag} small />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard