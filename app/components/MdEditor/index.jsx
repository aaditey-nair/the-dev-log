import { useState } from "react";

function MdEditor({ placeholder }) {
  const [content, setContent] = useState(placeholder);
  return (
    <div className="col-span-full grid grid-cols-2 gap-4">
      <textarea
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        className="bg-accent p-4 max-h-96 block"
      ></textarea>
      <textarea className="bg-accent p-4 h-96 block"></textarea>
    </div>
  );
}

export default MdEditor;
