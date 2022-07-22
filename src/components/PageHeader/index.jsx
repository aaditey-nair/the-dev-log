import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";

function PageHeader() {
  const router = useRouter();
  return (
    <div className="bg-accent">
      <div className="bg-dark border-t-4 border-primary py-2 px-4 capitalize font-sans text-left text-sm text-light flex items-center max-w-max">
        <FontAwesomeIcon icon={faFile} />
        {router.asPath === "/" ? (
          <span className="pl-2">home</span>
        ) : (
          <span className="pl-2">
            {router.asPath
              .split("/")
              [router.asPath.split("/").length - 1].split("?")[0]
              .replace(new RegExp("%20", "g"), " ")}
          </span>
        )}
        <FontAwesomeIcon className="ml-6" icon={faXmark} />
      </div>
    </div>
  );
}

export default PageHeader;
