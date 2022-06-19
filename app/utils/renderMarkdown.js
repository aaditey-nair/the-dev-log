import ReactMarkdown from "react-markdown";

function renderMarkdown(content) {
  return (
    <ReactMarkdown
      className="p-4 prose prose-headings:font-mono prose-headings:text-primary prose-p:text-light 
    prose-strong:text-secondary prose-ul:text-light prose-ul:leading-snug prose-ol:text-light prose-ol:leading-snug "
      children={content}
    />
  );
}

export default renderMarkdown;
