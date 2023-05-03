import BlogPostCard from "@/components/BlogPostCard";
import { Button } from "@/components/Button";
import PageWrapper from "@/components/PageWrapper";


function BlogPage() {
    return (
        <PageWrapper>

            <main>
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
                            <Button label="search" />
                        </div>
                    </div>
                    <div className="max-w-5xl mx-auto px-3 grid gap-4 text-chambray-950 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center">
                        <BlogPostCard title="Shitpost" desc="The Shitposter origin" postTag={['python', 'javascript', 'data science', 'python',]} />
                        <BlogPostCard title="ShitPost 2: Electric Boogaloo" desc="A sequel for the shitposter In publishing and graphic design, Lorem ipsum is a placeholder" postTag={['bruh']} />
                        <BlogPostCard title="ShitPost 3: Revelations" desc="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available" />
                        <BlogPostCard title="ShitPost 2: " desc="A sequel for the shitposter" />
                    </div>
                </div>
                <p className="mt-60 text-xs flex items-center justify-center dark:text-chambray-50">
                    2023 Grace Yudha Satriawan
                </p>
            </main>
        </PageWrapper>
    );
}

export default BlogPage;
