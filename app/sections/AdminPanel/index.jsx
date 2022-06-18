import Link from "next/link";

function AdminPanel() {
  return (
    <nav className="pl-4 pt-6 space-y-2">
      <Link href="/admin/new-post">
        <a className="bg-primary text-dark py-2 px-6 hover:bg-secondary transition-colors">
          New Post
        </a>
      </Link>
    </nav>
  );
}

export default AdminPanel;
