import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons";
import SidebarFile from "../../elements/SidebarFile";
import SidebarFolder from "../../components/SidebarFolder";

function Sidebar() {
  return (
    <>
      <div className="bg-accent">
        <div className="max-w-max px-4 py-2 bg-dark">
          <FontAwesomeIcon icon={faFolderClosed} />
          <span className="pl-2">Files</span>
        </div>
      </div>
      <div className="ml-4 mt-4">
        <span className="font-black text-base text-primary">THE-DEV-LOG</span>
        <div className="space-y-2 ml-5 mt-2">
          <SidebarFile href="/" fileName="home" />
          <SidebarFile href="/about" fileName="about" />
          <SidebarFolder folderName="posts">
            <SidebarFile href="/posts/post1" fileName="post 1" />
            <SidebarFile href="/" fileName="post 2" />
            <SidebarFile href="/" fileName="post 3" />
          </SidebarFolder>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
