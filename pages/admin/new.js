import SubmitPrimary from "../../app/elements/SubmitPrimary";

function New() {
  return (
    <div className="space-y-4">
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
      <br />
      <SubmitPrimary name="Create Post" />
    </div>
  );
}

export default New;
