import React from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const SidebarFile = React.memo(({ fileName, href }) => (
  <Link href={href}>
    <p className="cursor-pointer">
      <FontAwesomeIcon className="pr-2" size="lg" icon={faFile} />
      {fileName}
    </p>
  </Link>
));

export default SidebarFile;
