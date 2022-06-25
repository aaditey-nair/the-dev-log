import Link from "next/link";

function BlogLink({ href, children }) {
  return (
    <Link href={href}>
      <a target="_blank">{children[0]}</a>
    </Link>
  );
}

export default BlogLink;
