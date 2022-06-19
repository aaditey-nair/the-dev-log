import { useState } from "react";
import ReactMarkdown from "react-markdown";

function MdEditor({ placeholder }) {
  const [content, setContent] = useState(placeholder);
  return (
    <div className="col-span-full grid grid-cols-2 gap-4">
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        className="bg-accent p-4 block"
      ></textarea>
      <ReactMarkdown
        className="p-4 prose prose-headings:font-mono prose-headings:text-primary prose-p:text-light 
        prose-strong:text-secondary prose-ul:text-light prose-ul:leading-snug prose-ol:text-light prose-ol:leading-snug "
        children={content}
      />
    </div>
  );
}

export default MdEditor;
