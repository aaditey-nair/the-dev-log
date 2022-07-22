import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons";
import SidebarFile from "../../elements/SidebarFile";
import SidebarFolder from "../../components/SidebarFolder";

function Sidebar() {
  const [posts, setPosts] = useState([]);
  return (
    <>
      <div className="bg-accent">
        <div className="max-w-max px-4 pb-2 pt-3 bg-dark">
          <FontAwesomeIcon icon={faFolderClosed} />
          <span className="pl-2">Explorer</span>
        </div>
      </div>
      <div className="ml-4 mt-4">
        <span className="font-black text-base text-primary">THE-DEV-LOG</span>
        <div className="space-y-2 ml-5 mt-2">
          <SidebarFile href="/" fileName="home" />
          <SidebarFile href="/about" fileName="about" />
          <SidebarFolder folderName="posts">
            {posts &&
              posts.map((post) => {
                return (
                  <SidebarFile
                    key={post.title}
                    href="/posts/post1"
                    fileName="post 1"
                  />
                );
              })}
          </SidebarFolder>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
