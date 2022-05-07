import React from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const SidebarFile = React.memo(({ fileName, href }) => (
  <Link href={href}>
    <a className="flex items-center space-x-2">
      <FontAwesomeIcon size="lg" icon={faFile} />
      <p>{fileName}</p>
    </a>
  </Link>
));

export default SidebarFile;
