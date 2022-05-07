import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";

function PageHeader() {
  const router = useRouter();
  return (
    <div className="bg-accent capitalize font-sans text-left text-sm">
      <div className="bg-dark py-2 px-4 text-light flex items-center max-w-max">
        <FontAwesomeIcon size="md" icon={faFile} />
        {router.asPath === "/" ? (
          <span className="pl-2">home</span>
        ) : (
          <span className="pl-2">
            {router.asPath.split("/")[router.asPath.split("/").length - 1]}
          </span>
        )}
        <FontAwesomeIcon className="ml-6" size="md" icon={faXmark} />
      </div>
    </div>
  );
}

export default PageHeader;
