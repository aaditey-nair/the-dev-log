import { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderClosed } from "@fortawesome/free-solid-svg-icons";
import SidebarFile from "../../elements/SidebarFile";
import SidebarFolder from "../../components/SidebarFolder";

function Sidebar() {
  const [posts, setPosts] = useState([]);
  const [collectionData, setCollectionData] = useState([]);
  useEffect(() => {
    axios.get("/api/posts", { params: { published: true } }).then((res) => {
      setPosts(res.data);
    });
    axios.get("/api/collection", { params: { posts: true } }).then((res) => {
      setCollectionData(res.data);
    });
  }, []);
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
        <div className="space-y-2 mt-2">
          <SidebarFile href="/" fileName="home" />
          <SidebarFile href="/about" fileName="about" />
          <SidebarFolder folderName="collections">
            {collectionData &&
              collectionData.map((collection) => {
                return (
                  <SidebarFolder
                    key={collection.name}
                    folderName={collection.name}
                  >
                    {collection.posts.map((post) => {
                      return (
                        <SidebarFile
                          key={post.title + collection.name}
                          fileName={post.title}
                          href={"/posts/" + post.title}
                        />
                      );
                    })}
                  </SidebarFolder>
                );
              })}
          </SidebarFolder>
          <SidebarFolder folderName="posts">
            {posts &&
              posts.map((post) => {
                return (
                  <SidebarFile
                    key={post.title}
                    href={"/posts/" + post.title}
                    fileName={post.title}
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
