import TextBlogPreview from "../app/elements/TextBlogPreview";
import CategoryLink from "../app/elements/CategoryLink";
import NewsletterForm from "../app/components/NewsletterForm";

function HomePage() {
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
        <p className="text-center mx-auto mt-4 text-light max-w-[80ch]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </header>
      <div className="grid grid-cols-3 gap-4">
        <article className="bg-secondary h-36 col-span-1"></article>
        <article className="bg-primary h-36 col-span-2"></article>
        <article className="bg-light h-36 col-span-2"></article>
        <article className="bg-secondary h-36 col-span-1"></article>
        <article className="bg-stripe h-36 col-span-full"></article>
        <div className="col-span-2 space-y-8">
          <TextBlogPreview />
          <TextBlogPreview />
          <TextBlogPreview />
          <TextBlogPreview />
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
