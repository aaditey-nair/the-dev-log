import Link from "next/link";

function AdminPanel() {
  return (
    <nav>
      <Link href="/new-post">
        <a className="max-w-max bg-primary text-dark py-2 px-6 hover:bg-secondary transition-colors">
          New Post
        </a>
      </Link>
    </nav>
  );
}

export default AdminPanel;
