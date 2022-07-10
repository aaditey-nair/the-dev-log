import Link from "next/link";
import AdminPost from "../app/components/AdminPost";

function Admin() {
  return (
    <>
      <Link href="/admin/new">
        <a className="bg-primary max-w-max text-dark py-2 px-6 hover:bg-secondary transition-colors">
          New Post
        </a>
      </Link>
      <form className="my-2" action="" method="POST">
        <input className="py-2 px-1 mr-2 text-dark" name="collectionName" />
        <button className="bg-primary max-w-max text-dark py-2 px-6 hover:bg-secondary transition-colors">
          New Collection
        </button>
      </form>
      <div className="mt-8">
        <h1 className="text-xl font-black mb-4">Unpublished Posts</h1>
        <div className="grid grid-cols-5 gap-4">
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-xl font-black mb-4">Published Posts</h1>
        <div className="grid grid-cols-5 gap-4">
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
          <AdminPost name="This is a Post" />
        </div>
      </div>
    </>
  );
}

export default Admin;
