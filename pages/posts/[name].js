import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faHandsClapping,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

import Markdown from "../../src/components/Markdown";

import { PrismaClient } from "@prisma/client";
const fs = require("fs");
import { formatDate } from "../../src/utils";

export async function getServerSideProps(context) {
  const postName = context.query.name;
  const prisma = new PrismaClient();
  const post = await prisma.blog.findFirst({
    where: {
      title: postName,
    },
  });
  post.createdAt = post.createdAt.toJSON();
  post.content = fs.readFileSync(post.path).toString();
  return { props: { post } };
}

function Post({ post }) {
  const date = formatDate(post.createdAt);
  return (
    <>
      <header>
        <div className="h-[70vh] relative">
          <Image
            objectFit="contain"
            objectPosition="left"
            layout="fill"
            src={post.headerImg}
          />
        </div>
        <h1 className="text-5xl my-4 font-black text-primary">{post.title}</h1>
        <p className="font-mono">
          {date} | 4 min read |{" "}
          <span
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
            }}
            className="hover:text-primary cursor-pointer"
          >
            <FontAwesomeIcon icon={faShare} /> Share
          </span>
        </p>
      </header>
      <Markdown md={post.content} className="space-y-4 col-span-3 mt-8" />
      <div>
        <div className="flex gap-8 my-4 font-mono">
          <p className="hover:text-primary cursor-pointer">
            <FontAwesomeIcon size="xl" icon={faComments} /> Comments
          </p>
          <p className="hover:text-primary cursor-pointer">
            <FontAwesomeIcon size="xl" icon={faHandsClapping} />{" "}
            {String(post.liked)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Post;
