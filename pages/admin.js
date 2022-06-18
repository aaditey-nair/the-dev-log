import Link from "next/link";
import AdminPost from "../app/components/AdminPost";

function Admin() {
  return (
    <>
      <Link href="/admin/new-post">
        <a className="bg-primary max-w-max text-dark py-2 px-6 hover:bg-secondary transition-colors">
          New Post
        </a>
      </Link>
      <div className="mt-8">
        <h1 className="text-xl font-black mb-4">All Posts</h1>
        <AdminPost name="This is a Post" />
      </div>
    </>
  );
}

export default Admin;
