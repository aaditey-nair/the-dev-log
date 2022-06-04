import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatusMenuItem({ name, icon, href }) {
  return (
    <a target="_blank" href={href} className="space-x-2 block">
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </a>
  );
}

export default StatusMenuItem;
