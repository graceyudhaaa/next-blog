import BlogPage from "@/components/BlogPage";

export const metadata = {
    title: 'Bruh Blog by Grace Yudha',
  }

export default function Home() {

    return (
        <>
            {/* @ts-expect-error Async Server Component */}
            <BlogPage />
        </>
    );
}