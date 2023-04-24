import { getPosts } from "@/sanity/sanity-utils"

export default async function Home() {
  const posts = await getPosts()

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          {post.title}
        </div>
      ))}
    </div>
  )
}
