import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SidebarFile from "../../components/SidebarFile";
import SidebarFolder from "../../components/SidebarFolder";

function Sidebar() {
  return (
    <>
      <span className="flex space-x-2 items-center">
        <FontAwesomeIcon size="sm" icon={faChevronDown} />
        <p className="font-black text-base text-primary">THE-DEV-LOG</p>
      </span>
      <div className="space-y-2 pl-5">
        <SidebarFile fileName="home" />
        <SidebarFile fileName="contact" />
        <SidebarFile fileName="about" />
        <SidebarFolder folderName="posts">
          <SidebarFile fileName="post 1" />
          <SidebarFile fileName="post 2" />
          <SidebarFile fileName="post 3" />
        </SidebarFolder>
      </div>
    </>
  );
}

export default Sidebar;
