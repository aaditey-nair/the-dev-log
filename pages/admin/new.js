import { useRef } from "react";
import SubmitPrimary from "../../app/elements/SubmitPrimary";
import MdEditor from "../../app/components/MdEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function New() {
  const editor = useRef(null);
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
      <div className="flex items-center">
        <select className="bg-accent p-2 appearance-none">
          <option>Select Collection</option>
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
        </select>
        <FontAwesomeIcon
          icon={faPlus}
          className="text-light ml-2 p-2 bg-accent"
        />
      </div>
      <div>
        <input
          type="checkbox"
          value="Published"
          id="published"
          name="post-status"
          className="accent-primary"
        />
        <label className="pl-2" htmlFor="published">
          Published
        </label>
      </div>
      <div className="col-span-full">
        <h1 className="inline text-lg">Tags</h1>
        <div className="flex gap-4 mt-2 text-dark">
          <div className="px-2 py-1 bg-secondary">Python</div>
          <div className="px-2 py-1 bg-secondary">AI/ML</div>
          <div className="px-2 py-1 bg-secondary">Data Science</div>
          <FontAwesomeIcon icon={faPlus} className="text-dark p-2 bg-primary" />
        </div>
      </div>
      <MdEditor ref={editor} placeholder="# New Post" />
      <SubmitPrimary
        handleSubmit={() => {
          console.log(editor.current.value);
        }}
        name="Create Post"
      />
    </div>
  );
}

export default New;
