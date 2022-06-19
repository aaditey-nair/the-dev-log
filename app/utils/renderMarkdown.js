import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function renderMarkdown(content) {
  return (
    <ReactMarkdown
      className="p-4 prose prose-invert prose-headings:font-mono prose-headings:text-primary prose-p:text-light 
    prose-strong:text-secondary prose-ul:text-light prose-ul:leading-snug prose-ol:text-light prose-ol:leading-snug"
      children={content}
      remarkPlugins={[remarkGfm]}
    />
  );
}

export default renderMarkdown;
