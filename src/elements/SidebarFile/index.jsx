import { useState } from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

const SidebarFile = ({ fileName, href }) => {
  const [tooltipVisibility, setTooltipVisibility] = useState(false);
  return (
    <div className="relative ml-2">
      <Link href={href}>
        <a
          onMouseOver={() => {
            setTooltipVisibility(true);
          }}
          onMouseOut={() => {
            setTooltipVisibility(false);
          }}
          className="block max-w-max whitespace-nowrap text-ellipsis overflow-hidden"
        >
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
