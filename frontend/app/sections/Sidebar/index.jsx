import { useState } from "react";
import FilesBar from "../../components/FilesBar";
import {
  faFolderClosed,
  faHistory,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SidebarTab from "../../elements/SidebarTab";

function Sidebar() {
  const [activeTab, setActiveTab] = useState("files");
  function changeActiveTab(e, tab) {
    e.preventDefault();
    setActiveTab(tab);
  }
  return (
    <>
      <div className="bg-accent">
        <SidebarTab
          tabName="Files"
          handleClick={changeActiveTab}
          activeTab={activeTab}
          icon={faFolderClosed}
        />
        <SidebarTab
          tabName="Search"
          handleClick={changeActiveTab}
          activeTab={activeTab}
          icon={faSearch}
        />
        <SidebarTab
          tabName="History"
          handleClick={changeActiveTab}
          activeTab={activeTab}
          icon={faHistory}
        />
      </div>
      <div className="pl-4 pt-4 space-y-2">
        {activeTab == "files" && <FilesBar />}
      </div>
    </>
  );
}

export default Sidebar;
