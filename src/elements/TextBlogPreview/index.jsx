import Link from "next/link";
import { formatDate } from "../../utils";

function TextBlogPreview({ details }) {
  const date = formatDate(details.createdAt);
  return (
    <article>
      <Link href={"/posts/" + details.title}>
        <a className="hover:text-secondary block">
          <h1 className="text-2xl font-black text-secondary mb-2">
            {details.title}
          </h1>
          <p>{details.slug}</p>
          <p className="mt-4 text-sm text-primary">{date}</p>
        </a>
      </Link>
    </article>
  );
}

export default TextBlogPreview;
