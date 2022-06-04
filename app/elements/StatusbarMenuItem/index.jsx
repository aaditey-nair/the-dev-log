import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatusMenuItem({ name, icon, href }) {
  return (
    <a target="_blank" href={href} className="space-x-2">
      <FontAwesomeIcon size="sm" icon={icon} />
      <span className="text-sm">{name}</span>
    </a>
  );
}

export default StatusMenuItem;
