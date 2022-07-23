import TextBlogPreview from "../src/elements/TextBlogPreview";
import CategoryLink from "../src/elements/CategoryLink";
import NewsletterForm from "../src/components/NewsletterForm";

import { PrismaClient } from "@prisma/client";

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.blog.findMany({
    take: 9,
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return {
    props: {
      posts: posts.map((post) => {
        post.createdAt = post.createdAt.toJSON();
        return post;
      }),
    },
  };
}

function HomePage({ posts }) {
  const date = new Date();
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const month = date.toLocaleDateString("en-US", { month: "long" });
  return (
    <>
      <header className="mt-8 mb-10">
        <h1 className="text-8xl font-mono tracking-[-0.02em] word-spacing-tight text-primary text-center font-black">
          THE DEV LOG
        </h1>
        <p className="text-center tracking-wide font-mono">
          {day}, {date.getDate()} {month}, {date.getFullYear()}
        </p>
      </header>
      <div className="grid grid-cols-3 gap-4">
        <article className="bg-stripe h-96 col-span-full"></article>
        <div className="col-span-2 space-y-8">
          {posts.map((post) => {
            return (
              <TextBlogPreview
                key={post.title + new Date().getTime()}
                details={post}
              />
            );
          })}
        </div>
        <div className="space-y-4">
          <div className="bg-secondary p-2 flex flex-wrap gap-2">
            <CategoryLink name="python" />
            <CategoryLink name="AI/ML" />
            <CategoryLink name="flutter" />
            <CategoryLink name="API" />
            <CategoryLink name="next js" />
            <CategoryLink name="vue" />
            <CategoryLink name="javascript" />
            <CategoryLink name="react" />
            <CategoryLink name="web design" />
            <CategoryLink name="automation" />
          </div>
          <div className="bg-primary text-dark mt-auto">
            <div className="px-4 pt-2">
              <h1 className="text-xl font-black">
                An development newsletter that actually helps
              </h1>
              <p className="py-2 text-sm leading-6">
                This blog is meant to share fun and informative content for
                developers. This newsletter is no different. Be the first to be
                notified on new content
              </p>
              <p>No spam, no adverts. Unsubscribe any time</p>
            </div>
            <NewsletterForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
