import { useState } from "react";
import {
  faFolder,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarFolder({ folderName, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-2">
      <div
        onClick={(e) => {
          e.preventDefault();
          setOpen(!open);
        }}
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
        <p className="select-none">{folderName}</p>
      </div>
      {open && <div className="pl-6 space-y-2 select-none">{children}</div>}
    </div>
  );
}

export default SidebarFolder;
