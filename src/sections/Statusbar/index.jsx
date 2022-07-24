import StatusbarItem from "../../components/StatusbarItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faCodeCommit,
  faHashtag,
  faDove,
  faEnvelopesBulk,
  faRss,
  faVolumeHigh,
  faRefresh,
} from "@fortawesome/free-solid-svg-icons";

function Statusbar() {
  const year = new Date().getFullYear();
  return (
    <nav className="px-4 py-1 h-full flex justify-between">
      <div className="flex items-center gap-4">
        <StatusbarItem name="socials" icon={faCodeBranch}>
          <a
            target="_blank"
            href="https://github.com/aaditeynair"
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
        <a href="/" className="space-x-2 block">
          <FontAwesomeIcon size="sm" icon={faRefresh} />
        </a>
        <span className="text-sm">Copyright © {year}</span>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <span>Status: Logged Out</span>
        <a href="/sign-in">Sign In</a>
        <a href="/sign-in">Log In</a>
        <a href="/sign-in">Log out</a>
        <FontAwesomeIcon size="sm" icon={faVolumeHigh} />
        <FontAwesomeIcon size="sm" icon={faRss} />
      </div>
    </nav>
  );
}

export default Statusbar;
