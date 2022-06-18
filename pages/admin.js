import Link from "next/link";

function Admin() {
  return (
    <>
      <Link href="/admin/new-post">
        <a className="bg-primary text-dark py-2 px-6 hover:bg-secondary transition-colors">
          New Post
        </a>
      </Link>
    </>
  );
}

export default Admin;
