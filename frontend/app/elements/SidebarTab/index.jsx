import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SidebarTab({ tabName, handleClick, activeTab, icon }) {
  return (
    <button
      onClick={(e) => handleClick(e, tabName.toLowerCase())}
      className={
        (activeTab === tabName.toLowerCase() ? "bg-dark" : "bg-accent") +
        " min-w-max px-4 py-2"
      }
    >
      <FontAwesomeIcon icon={icon} />
      <span className="pl-2">{tabName}</span>
    </button>
  );
}

export default SidebarTab;
