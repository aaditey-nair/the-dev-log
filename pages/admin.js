import Link from "next/link";
import AdminPost from "../src/components/AdminPost";
import CollectionForm from "../src/components/CollectionForm";
import { PrismaClient } from "@prisma/client";

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.blog.findMany({
    select: {
      id: true,
      title: true,
      path: true,
      published: true,
    },
  });
  const publishedPosts = posts.filter((post) => post.published);
  const unpublishedPosts = posts.filter((post) => !post.published);
  return {
    props: {
      publishedPosts: publishedPosts,
      unpublishedPosts: unpublishedPosts,
    },
  };
}

function Admin({ publishedPosts, unpublishedPosts }) {
  return (
    <>
      <Link href="/admin/new">
        <a className="bg-primary max-w-max text-dark py-2 px-6 hover:bg-secondary transition-colors">
          New Post
        </a>
      </Link>
      <CollectionForm />
      <div className="mt-8">
        <h1 className="text-xl font-black mb-4">Unpublished Posts</h1>
        <div className="grid grid-cols-5 gap-4">
          {unpublishedPosts.map((post) => {
            return (
              <AdminPost
                key={post.title + "notpublished" + post.id}
                name={post.title}
              />
            );
          })}
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-black mb-4">Published Posts</h1>
        <div className="grid grid-cols-5 gap-4">
          {publishedPosts.map((post) => {
            return (
              <AdminPost
                key={post.title + "publishedtrue" + post.id}
                name={post.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Admin;
