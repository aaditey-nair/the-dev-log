import { useState } from "react";
import {
  faFolder,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarFolder({ folderName }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={(e) => setOpen(!open)}
      className="flex items-center space-x-2"
    >
      <span className="min-w-[1rem]">
        {open ? (
          <FontAwesomeIcon size="sm" icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon size="sm" icon={faChevronRight} />
        )}
      </span>
      <FontAwesomeIcon size="lg" icon={faFolder} />
      <p>{folderName}</p>
    </div>
  );
}

export default SidebarFolder;
