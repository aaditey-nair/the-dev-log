import Link from "next/link";

function CategoryLink({ name }) {
  return (
    <Link
      href={{
        pathname: "posts",
        query: { cat: name.toLowerCase().replace("/", "_").replace(" ", "-") },
      }}
    >
      <a className="bg-dark hover:bg-stripe cursor-pointer inline-flex py-2 px-4">
        {name}
      </a>
    </Link>
  );
}

export default CategoryLink;
