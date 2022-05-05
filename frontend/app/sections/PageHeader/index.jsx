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
    <div className="font-sans text-dark text-left text-sm space-y-4">
      <div className="flex items-center gap-4">
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
      <div className="bg-secondary max-w-max px-4 gap-2 rounded-lg flex items-center">
        <span>the-dev-log</span>
        {router.asPath === "/" ? (
          <span className="space-x-2">
            <FontAwesomeIcon icon={faChevronRight} />
            <span>home</span>
          </span>
        ) : (
          <>
            {router.asPath.split("/").map((route) => {
              if (route != "") {
                return (
                  <span key={route} className="space-x-2">
                    <FontAwesomeIcon icon={faChevronRight} />
                    <span>{route}</span>
                  </span>
                );
              } else {
                return <></>;
              }
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default PageHeader;
