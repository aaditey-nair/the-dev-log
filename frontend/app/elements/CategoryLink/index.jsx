import Link from "next/link";

function CategoryLink({ name }) {
  return (
    <Link href={"/posts?cat=" + name.toLowerCase()}>
      <span className="bg-dark cursor-pointer inline-flex py-2 px-4">
        {name}
      </span>
    </Link>
  );
}

export default CategoryLink;
