import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faHandsClapping,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import Markdown from "../../app/components/Markdown";

import { PrismaClient } from "@prisma/client";

export async function getServerSideProps(context) {
  // const router = useRouter();
  const postName = context.query.pid;
  const prisma = new PrismaClient();
  const post = await prisma.blog.findFirst({
    where: {
      title: postName,
    },
  });
  post.createdAt = String(post.createdAt);
  return { props: { post } };
}

function Post({ post }) {
  return (
    <>
      <header>
        <div className="w-full h-80 bg-secondary"></div>
        <h1 className="text-5xl my-4 font-black text-primary">{post.title}</h1>
        <p className="font-mono">
          June 13 2022 | 4 min read |{" "}
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
      <Markdown md={post.path} className="space-y-4 col-span-3 mt-8" />
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
