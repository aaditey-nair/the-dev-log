import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

function SidebarFile({ fileName }) {
  return (
    <Link href="/">
      <a className="flex items-center space-x-2">
        <FontAwesomeIcon size="lg" icon={faFile} />
        <p>{fileName}</p>
      </a>
    </Link>
  );
}

export default SidebarFile;
