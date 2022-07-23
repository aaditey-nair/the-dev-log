import Link from "next/link";
import CategoryLink from "../CategoryLink";

import { formatDate } from "../../utils";

function TextBlogPreview({ details }) {
  const date = formatDate(details.createdAt);
  return (
    <article>
      <Link href={"/posts/" + details.title}>
        <a className="group block">
          <h1 className="text-2xl font-black text-light group-hover:text-secondary mb-2.5">
            {details.title}
          </h1>
          <p className="w-11/12">{details.slug}</p>
          <p className="text-sm text-primary font-mono my-1.5">{date}</p>
        </a>
      </Link>
      {details.tags && (
        <div className="flex flex-wrap gap-2">
          {details.tags.map((tag) => {
            console.log(tag);
            return <CategoryLink name={tag} />;
          })}
        </div>
      )}
    </article>
  );
}

export default TextBlogPreview;
