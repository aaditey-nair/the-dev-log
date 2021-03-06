import { useRef, useState } from "react";
import SubmitPrimary from "../../src/elements/SubmitPrimary";
import MdEditor from "../../src/components/MdEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const collections = await prisma.collection.findMany({
    select: {
      name: true,
    },
  });
  return { props: { collections: collections } };
}

function New({ collections }) {
  const [postData, setPostData] = useState({
    data: {
      title: "",
      slug: "",
      tags: undefined,
      collection: undefined,
      published: false,
      headerImg: undefined,
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
              slug: e.target.value,
            },
          }));
        }}
        className="min-w-full text-dark bg-light px-4 py-2 focus-within:border-0"
        placeholder="Post Slug"
        type="text"
        name="post-slug"
      />
      <div className="flex items-center">
        <select
          onChange={(e) => {
            setPostData((prev) => ({
              data: {
                ...prev.data,
                collection:
                  e.target.value == "Select Collection"
                    ? undefined
                    : e.target.value,
              },
            }));
          }}
          className="bg-accent p-2 appearance-none"
        >
          <option>Select Collection</option>
          {collections.map((collection) => {
            return <option key={collection.name}>{collection.name}</option>;
          })}
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
          onChange={(e) => {
            setPostData((prev) => ({
              data: {
                ...prev.data,
                published: e.target.checked,
              },
            }));
          }}
        />
        <label className="pl-2" htmlFor="published">
          Published
        </label>
      </div>
      <div>
        <h1 className="inline text-lg">Tags</h1>
        <div className="flex gap-4 mt-2 text-dark">
          {postData.data.tags &&
            postData.data.tags.map((tag) => {
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
                tags: prev.data.tags
                  ? [...prev.data.tags, e.target[0].value]
                  : [e.target[0].value],
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
      <input
        onChange={(e) => {
          setPostData((prev) => ({
            data: {
              ...prev.data,
              headerImg: e.target.value,
            },
          }));
        }}
        className="min-w-full h-12 text-dark bg-light px-4 focus-within:border-0"
        placeholder="https://picture.com"
        type="text"
        name="header-img"
      />
      <MdEditor ref={editor} placeholder="# New Post" />
      <SubmitPrimary
        handleSubmit={() => {
          const newPostData = {
            ...postData.data,
            path: editor.current.value,
          };
          delete newPostData.collection;
          axios.post("/api/posts", newPostData).then((res) => {
            const postId = res.data.id;
            if (postData.data.collection) {
              axios.patch(`/api/collection/${postData.data.collection}`, {
                postId: postId,
              });
            }
          });
        }}
        name="Create Post"
      />
    </div>
  );
}

export default New;
