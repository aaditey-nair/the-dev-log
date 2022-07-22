import Link from "next/link";
import { formatDate } from "../../utils";

function TextBlogPreview({ details }) {
  const date = formatDate(details.createdAt);
  return (
    <article>
      <Link href={"/posts/" + details.title}>
        <a className="group block">
          <h1 className="text-2xl font-black text-light group-hover:text-secondary">
            {details.title}
          </h1>
          <p className="mt-3 mb-1">{details.slug}</p>
          <p className="text-sm text-primary font-mono">{date}</p>
        </a>
      </Link>
    </article>
  );
}

export default TextBlogPreview;
