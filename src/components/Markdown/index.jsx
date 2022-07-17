import { createElement, Fragment, useEffect, useState } from "react";

import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypePrism from "@mapbox/rehype-prism";
import rehypeReact from "rehype-react/lib";
import BlogLink from "../../elements/BlogLink";

function Markdown({ md, className }) {
  const [content, setContent] = useState(Fragment);
  useEffect(() => {
    unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypePrism)
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: { a: BlogLink },
      })
      .process(md)
      .then((output) => {
        setContent(output.result);
      });
  }, [md]);
  return (
    <article
      className={
        "prose max-w-screen-lg prose-invert prose-headings:font-mono prose-headings:text-primary prose-p:text-light prose-strong:text-secondary prose-ul:text-light prose-ul:leading-snug prose-ol:text-light prose-ol:leading-snug prose-blockquote:text-thin prose-blockquote:text-xl " +
        className
      }
    >
      {content}
    </article>
  );
}

export default Markdown;
