import BlogPostCard from "@/components/BlogPostCard";
import { Button } from "@/components/Button";
import PageWrapper from "@/components/PageWrapper";
import { getPosts } from "@/sanity/sanity-utils";


async function BlogPage() {
    const posts = await getPosts()

    return (
        <PageWrapper>
            <main className="mb-60">
                <div className="min-h-screen">
                    <div className="h-[250px] font-montserrat flex flex-col items-center justify-center gap-y-6 text-center">
                        <div>

                            <p className="text-chambray-950 dark:text-chambray-50 text-5xl  font-extrabold">
                                bruh<span className="text-chambray-700 dark:text-chambray-300">blog</span>
                            </p>
                            <p className="text-lg dark:text-chambray-50">
                                i write whatever i want here
                            </p>
                        </div>
                        <div className="flex flex-row px-3 sm:w-1/2 justify-center w-full">
                            <input type="text" placeholder="You may not find it though" className="text-base font-inter border-y border-l p-2  grow border-gray-500 dark:border-chambray-800 dark:bg-chambray-950 dark:text-chambray-50 " />
                            <Button label="search                                                           " />
                        </div>
                    </div>
                    <div className="max-w-5xl mx-auto px-3 grid gap-4 text-chambray-950 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">

                        {posts.map((post) => {
                            return (
                                <BlogPostCard imgSrc={post.image} title={post.title} key={post._id} desc={post.description} postTag={post.tags} slug={post.slug} />
                            )
                        })}
                    </div>
                </div>
            </main>
        </PageWrapper>
    );
}

export default BlogPage;
