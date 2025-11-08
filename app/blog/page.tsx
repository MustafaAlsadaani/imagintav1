import PageTransition from "@/components/layout/PageTransition";
import BlogIntro from "@/components/sections/BlogIntro";
import BlogFeed from "@/components/sections/BlogFeed";

export const metadata = {
  title: "Imaginta Feed | Social-style Insights",
  description:
    "Scroll the Imaginta feed for daily drops from Mustafa, Sero, and Falcon—web, design, marketing, and business growth tips delivered in a premium dark experience.",
};

export default function BlogPage() {
  return (
    <PageTransition>
      <div className="flex flex-col bg-background text-foreground">
        <BlogIntro />
        <BlogFeed />
      </div>
    </PageTransition>
  );
}
