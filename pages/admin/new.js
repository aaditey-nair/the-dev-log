import SubmitPrimary from "../../app/elements/SubmitPrimary";
import { useState } from "react";

function New() {
  const [content, setContent] = useState("**Write a new Post**");
  return (
    <div className="grid grid-cols-2 gap-4">
      <input
        className="min-w-full text-dark bg-light px-4 py-2 focus-within:border-0"
        placeholder="Post Title"
        type="text"
        name="post-title"
      />
      <input
        className="min-w-full text-dark bg-light px-4 py-2 focus-within:border-0"
        placeholder="Post Subtitle"
        type="text"
        name="post-subtitle"
      />
      <div className="col-span-full">
        <input
          type="checkbox"
          value="Published"
          id="published"
          name="post-status"
          className="accent-primary"
        />
        <label className="pl-2" for="published">
          Published
        </label>
      </div>
      <div className="col-span-full grid grid-cols-2 gap-4">
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          className="bg-accent p-4 h-96 block"
        ></textarea>
        <textarea className="bg-accent p-4 h-96 block"></textarea>
      </div>
      <SubmitPrimary name="Create Post" />
    </div>
  );
}

export default New;
