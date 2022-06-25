import { useRef, useState } from "react";
import SubmitPrimary from "../../app/elements/SubmitPrimary";
import MdEditor from "../../app/components/MdEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function New() {
  const [postData, setPostData] = useState({
    data: {
      title: "",
      subtitle: "",
      tags: [],
      collection: "",
    },
  });
  const editor = useRef(null);
  return (
    <div className="grid grid-cols-2 gap-4">
      <input
        onChange={(e) => {
          setPostData((prev) => ({
            data: {
              ...prev.data,
              title: e.target.value,
            },
          }));
        }}
        className="min-w-full text-dark bg-light px-4 py-2 focus-within:border-0"
        placeholder="Post Title"
        type="text"
        name="post-title"
      />
      <input
        onChange={(e) => {
          setPostData((prev) => ({
            data: {
              ...prev.data,
              subtitle: e.target.value,
            },
          }));
        }}
        className="min-w-full text-dark bg-light px-4 py-2 focus-within:border-0"
        placeholder="Post Subtitle"
        type="text"
        name="post-subtitle"
      />
      <div className="flex items-center">
        <select
          onChange={(e) => {
            setPostData((prev) => ({
              data: {
                ...prev.data,
                collection:
                  e.target.value == "Select Collection" ? "" : e.target.value,
              },
            }));
          }}
          className="bg-accent p-2 appearance-none"
        >
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
          {postData.data.tags.map((tag) => {
            return (
              <div
                onClick={() => {
                  setPostData((prev) => ({
                    data: {
                      ...prev.data,
                      tags: prev.data.tags.filter(
                        (filterTag) => filterTag !== tag
                      ),
                    },
                  }));
                }}
                className="px-2 py-1 bg-secondary"
              >
                {tag}
              </div>
            );
          })}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPostData((prev) => ({
              data: {
                ...prev.data,
                tags: [...prev.data.tags, e.target[0].value],
              },
            }));
          }}
          className="space-x-4 mt-4"
        >
          <input
            className="bg-light py-2 px-2 text-dark"
            placeholder="python"
            type="text"
            name="tags"
          />
          <button className="bg-primary px-4 py-2 text-dark">Add</button>
        </form>
      </div>
      <MdEditor ref={editor} placeholder="# New Post" />
      <SubmitPrimary
        handleSubmit={() => {
          const newPost = {
            ...postData.data,
            content: editor.current.value,
          };
          console.log(newPost);
        }}
        name="Create Post"
      />
    </div>
  );
}

export default New;
