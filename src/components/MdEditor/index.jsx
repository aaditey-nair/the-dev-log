import { useState, forwardRef } from "react";
import Markdown from "../Markdown";

const MdEditor = forwardRef(({ placeholder }, ref) => {
  const [content, setContent] = useState(placeholder);
  return (
    <div className="col-span-full grid grid-cols-2 max-h-[28rem] gap-4">
      <textarea
        ref={ref}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        className="bg-accent p-4 block overflow-auto"
      ></textarea>
      <Markdown md={content} className="overflow-auto pr-4" />
    </div>
  );
});

export default MdEditor;
