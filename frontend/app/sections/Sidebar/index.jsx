import { useState } from "react";
import FilesBar from "../../components/FilesBar";
import {
  faCog,
  faFolderClosed,
  faHistory,
} from "@fortawesome/free-solid-svg-icons";
import SidebarTab from "../../components/SidebarTab";

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
          tabName="Settings"
          handleClick={changeActiveTab}
          activeTab={activeTab}
          icon={faCog}
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
        {activeTab}
      </div>
    </>
  );
}

export default Sidebar;
