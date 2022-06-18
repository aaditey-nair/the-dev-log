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
      <ReactMarkdown className="bg-accent p-4" children={content} />
    </div>
  );
}

export default MdEditor;
