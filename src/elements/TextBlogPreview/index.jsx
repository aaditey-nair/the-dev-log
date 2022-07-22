import Link from "next/link";

function TextBlogPreview({ details }) {
  return (
    <article>
      <Link href={"/posts/" + details.title}>
        <a className="hover:text-secondary block">
          <h1 className="text-2xl font-black text-secondary mb-2">
            {details.title}
          </h1>
          <p>{details.slug}</p>
          <p className="mt-4 text-sm text-primary">{details.createdAt}</p>
        </a>
      </Link>
    </article>
  );
}

export default TextBlogPreview;
