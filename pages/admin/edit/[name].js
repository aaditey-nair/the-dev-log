import { useRef, useState } from "react";
import SubmitPrimary from "../../../src/elements/SubmitPrimary";
import MdEditor from "../../../src/components/MdEditor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const fs = require("fs");

export async function getServerSideProps(ctx) {
  const prisma = new PrismaClient();
  const collections = await prisma.collection.findMany({
    select: {
      name: true,
    },
  });
  const post = await prisma.blog.findFirst({
    where: {
      title: ctx.query.name,
    },
    select: {
      title: true,
      slug: true,
      tags: true,
      collectionName: true,
      published: true,
      path: true,
    },
  });
  post.content = fs.readFileSync(post.path).toString();
  return { props: { collections: collections, data: post } };
}

function Edit({ collections, data }) {
  const [postData, setPostData] = useState({
    data: {
      title: data.title,
      slug: data.slug,
      tags: data.tags,
      collection: data.collectionName,
      published: data.published,
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
        value={postData.data.title}
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
        value={postData.data.slug}
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
          value={postData.data.collection}
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
          checked={postData.data.published}
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
      <div className="col-span-full">
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
      <MdEditor ref={editor} placeholder={data.content} />
      <SubmitPrimary
        handleSubmit={() => {
          const newPostData = {
            ...postData.data,
            content: editor.current.value,
          };
          delete newPostData.collection;
          axios.put("/api/posts/" + data.title, newPostData);
          // .then((res) => {
          // const postId = res.data.id;
          // if (postData.data.collection) {
          //   axios.patch(`/api/collection/${postData.data.collection}`, {
          //     postId: postId,
          //   });
          // }
          // });
        }}
        name="Update Post"
      />
    </div>
  );
}

export default Edit;
