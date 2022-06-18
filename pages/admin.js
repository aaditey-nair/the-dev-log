import Link from "next/link";

function Admin() {
  return (
    <>
      <Link href="/admin/new-post">
        <a className="bg-primary max-w-max text-dark py-2 px-6 hover:bg-secondary transition-colors">
          New Post
        </a>
      </Link>
    </>
  );
}

export default Admin;
