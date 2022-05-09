import Link from "next/link";

function CategoryLink({ name }) {
  const href =
    "/posts?cat=" + name.toLowerCase().replace("/", "_").replace(" ", "-");
  return (
    <Link href={href}>
      <span className="bg-dark hover:bg-stripe cursor-pointer inline-flex py-2 px-4">
        {name}
      </span>
    </Link>
  );
}

export default CategoryLink;
