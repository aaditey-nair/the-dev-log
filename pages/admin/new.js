import SubmitPrimary from "../../app/elements/SubmitPrimary";
import MdEditor from "../../app/components/MdEditor";

function New() {
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
      <MdEditor placeholder="# New Post" />
      <SubmitPrimary name="Create Post" />
    </div>
  );
}

export default New;
