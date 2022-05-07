import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFile,
  faPlus,
  faXmark,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function PageHeader() {
  const router = useRouter();
  return (
    <div className="flex items-center gap-4 font-sans text-dark text-left text-sm">
      <div className="py-2 flex items-center px-4 max-w-max rounded-lg bg-primary capitalize">
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
      <FontAwesomeIcon
        size="xs"
        className="bg-primary p-2 rounded-lg"
        icon={faPlus}
      />
    </div>
  );
}

export default PageHeader;
