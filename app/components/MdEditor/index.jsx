import { useState } from "react";
import { renderMarkdown } from "../../utils";

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
      {renderMarkdown(content)}
    </div>
  );
}

export default MdEditor;
