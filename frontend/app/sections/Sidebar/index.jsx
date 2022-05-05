import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SidebarFile from "../../components/SIdebarFile";

function Sidebar() {
  return (
    <>
      <span className="flex space-x-2 items-center">
        <FontAwesomeIcon size="sm" icon={faChevronDown} />
        <p className="font-black text-base text-primary">THE-DEV-LOG</p>
      </span>
      <SidebarFile fileName="contact" />
    </>
  );
}

export default Sidebar;
