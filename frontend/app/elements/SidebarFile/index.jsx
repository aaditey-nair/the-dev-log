import React from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const SidebarFile = React.memo(({ fileName, href }) => (
  <Link href={href}>
    <a className="block">
      <FontAwesomeIcon className="pr-2" size="lg" icon={faFile} />
      {fileName}
    </a>
  </Link>
));

export default SidebarFile;
