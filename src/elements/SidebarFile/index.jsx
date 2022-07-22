import React from "react";

import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const SidebarFile = ({ fileName, href }) => (
  <div className="group relative">
    <Link href={href}>
      <a className="block whitespace-nowrap text-ellipsis overflow-hidden">
        <FontAwesomeIcon className="pr-2" size="lg" icon={faFile} />
        {fileName}
      </a>
    </Link>
    <span className="opacity-0 group-hover:opacity-100 transition-opacity delay-1000 absolute top-2 text-xs left-8 bg-accent text-primary p-2 whitespace-nowrap">
      {fileName}
    </span>
  </div>
);

export default SidebarFile;
