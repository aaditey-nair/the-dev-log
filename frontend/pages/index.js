import TextBlogPreview from "../app/elements/TextBlogPreview";

function HomePage() {
  return (
    <>
      <h1 className="text-8xl font-mono text-primary text-center font-black pt-8">
        dev.log()
      </h1>
      <p className="text-center mx-auto my-4 text-light max-w-[80ch]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-secondary h-36 col-span-1"></div>
        <div className="bg-primary h-36 col-span-2"></div>
        <div className="bg-light h-36 col-span-2"></div>
        <div className="bg-secondary h-36 col-span-1"></div>
        <div className="bg-secondary h-36 col-span-1"></div>
        <div className="bg-accent h-36 col-span-1"></div>
        <div className="bg-secondary h-36 col-span-1"></div>
        <div className="bg-gradient-to-r from-primary to-accent h-36 col-span-full"></div>
        <div className="col-span-2 space-y-8">
          <TextBlogPreview />
          <TextBlogPreview />
          <TextBlogPreview />
          <TextBlogPreview />
          <TextBlogPreview />
        </div>
        <div className="space-y-4">
          <div className="h-40 bg-secondary"></div>
          <div className="h-[26rem] bg-secondary"></div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
