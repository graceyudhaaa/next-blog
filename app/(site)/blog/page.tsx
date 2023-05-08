import BlogPage from "@/components/BlogPage";

export default function Home() {

    return (
        <>
            {/* @ts-expect-error Async Server Component */}
            <BlogPage />
        </>
    );
}