import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faXmark } from "@fortawesome/free-solid-svg-icons";

function PageHeader() {
  const router = useRouter();
  return (
    <div className="bg-dark capitalize font-sans text-left text-sm py-2 px-4 text-light flex items-center max-w-max border-t-4 border-primary">
      <FontAwesomeIcon icon={faFile} />
      {router.asPath === "/" ? (
        <span className="pl-2">home</span>
      ) : (
        <span className="pl-2">
          {
            router.asPath
              .split("/")
              [router.asPath.split("/").length - 1].split("?")[0]
          }
        </span>
      )}
      <FontAwesomeIcon className="ml-6" icon={faXmark} />
    </div>
  );
}

export default PageHeader;
