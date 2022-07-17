import Link from "next/link";

function BlogLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="hover:text-primary" target="_blank">
        {children[0]}
      </a>
    </Link>
  );
}

export default BlogLink;
