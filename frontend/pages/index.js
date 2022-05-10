import TextBlogPreview from "../app/elements/TextBlogPreview";
import CategoryLink from "../app/elements/CategoryLink";
import FormInput from "../app/elements/FormInput";

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
          <div className="bg-secondary">
            <form className="flex flex-col gap-4 p-4">
              <label htmlFor="subscription-fname" className="text-dark">
                First Name
              </label>
              <FormInput
                inputId="subscription-fname"
                type="text"
                name="fname"
              />
              <label htmlFor="subscription-email" className="text-dark">
                Email
              </label>
              <FormInput
                inputId="subscription-email"
                type="email"
                name="email"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
