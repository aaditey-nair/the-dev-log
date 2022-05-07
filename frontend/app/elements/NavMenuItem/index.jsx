import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
function NavMenuItem({ name, icon, href }) {
  return (
    <Link href={href}>
      <a className="space-x-2 block">
        {icon ? (
          <FontAwesomeIcon icon={icon} />
        ) : (
          <FontAwesomeIcon icon={faLink} />
        )}
        <span>{name}</span>
      </a>
    </Link>
  );
}

export default NavMenuItem;
