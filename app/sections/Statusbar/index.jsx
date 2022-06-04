import StatusbarItem from "../../components/StatusbarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faCodeCommit,
  faHashtag,
  faDove,
  faEnvelopesBulk,
} from "@fortawesome/free-solid-svg-icons";

function Statusbar() {
  return (
    <nav className="flex items-center px-4 py-1 h-full gap-4">
      <StatusbarItem name="socials" icon={faCodeBranch}>
        <a
          target="_blank"
          href="https://github.com/Aaditey-Nair"
          className="space-x-2 block"
        >
          <FontAwesomeIcon size="sm" icon={faCodeCommit} />
          <span className="text-sm">Github</span>
        </a>
        <a target="_blank" href="/" className="space-x-2 block">
          <FontAwesomeIcon size="sm" icon={faHashtag} />
          <span className="text-sm">Instagram</span>
        </a>
        <a target="_blank" href="/" className="space-x-2 block">
          <FontAwesomeIcon size="sm" icon={faDove} />
          <span className="text-sm">Twitter</span>
        </a>
        <span className="space-x-2 block">
          <FontAwesomeIcon size="sm" icon={faEnvelopesBulk} />
          <span className="text-sm">aaditeyn@gmail.com</span>
        </span>
      </StatusbarItem>
    </nav>
  );
}

export default Statusbar;
