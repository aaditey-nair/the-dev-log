import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const SidebarFile = ({ fileName, href }) => {
  const [tooltipVisibility, setTooltipVisibility] = useState(false);
  return (
    <div
      onMouseOver={() => {
        setTooltipVisibility(true);
      }}
      onMouseOut={() => {
        setTooltipVisibility(false);
      }}
      className="relative"
    >
      <Link href={href}>
        <a className="block whitespace-nowrap text-ellipsis overflow-hidden">
          <FontAwesomeIcon className="pr-2" size="lg" icon={faFile} />
          {fileName}
        </a>
      </Link>
      {tooltipVisibility && (
        <span className="absolute -bottom-8 text-xs left-8 bg-accent text-primary p-2 whitespace-nowrap z-50">
          {fileName}
        </span>
      )}
    </div>
  );
};

export default SidebarFile;
