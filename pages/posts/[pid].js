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
  post.createdAt = post.createdAt.toString();
  return { props: { post } };
}

function Post({ post }) {
  const content = post.path;
  return (
    <>
      <header>
        <div className="w-full h-80 bg-secondary"></div>
        <h1 className="text-4xl my-4 font-black font-mono text-primary">
          This is the Post Title
        </h1>
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
      <Markdown md={content} className="space-y-4 col-span-3 mt-8" />
      <div>
        <div className="flex gap-8 my-4 font-mono">
          <p className="hover:text-primary cursor-pointer">
            <FontAwesomeIcon size="xl" icon={faComments} /> Comments
          </p>
          <p className="hover:text-primary cursor-pointer">
            <FontAwesomeIcon size="xl" icon={faHandsClapping} /> 420
          </p>
        </div>
      </div>
    </>
  );
}

export default Post;
