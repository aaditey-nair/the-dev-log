import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

function StatusMenuItem({ name, icon, href }) {
  return (
    <a target="_blank" href={href} className="space-x-2 block">
      {icon ? (
        <FontAwesomeIcon icon={icon} />
      ) : (
        <FontAwesomeIcon icon={faLink} />
      )}
      <span>{name}</span>
    </a>
  );
}

export default StatusMenuItem;
