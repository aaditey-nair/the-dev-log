import Link from "next/link";
import CategoryLink from "../CategoryLink";

import { formatDate } from "../../utils";

function TextBlogPreview({ details }) {
  const date = formatDate(details.createdAt);
  return (
    <article>
      <Link href={"/posts/" + details.title}>
        <a className="group block">
          <h1 className="text-2xl font-black text-light group-hover:text-secondary mb-1">
            {details.title}
          </h1>
          {details.tags && (
            <div className="flex flex-wrap gap-2 my-2.5">
              {details.tags.map((tag) => {
                return <CategoryLink name={tag} />;
              })}
            </div>
          )}
          <p className="mb-1 w-11/12">{details.slug}</p>
          <p className="text-sm text-primary font-mono">{date}</p>
        </a>
      </Link>
    </article>
  );
}

export default TextBlogPreview;
