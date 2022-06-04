import StatusbarItem from "../../components/StatusbarItem";
import StatusbarMenuItem from "../../elements/StatusbarMenuItem";
import {
  faBriefcase,
  faCodeBranch,
  faDove,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";

function Statusbar() {
  return (
    <nav className="flex items-center px-4 h-full gap-4">
      <span className="font-mono text-primary">dev.log()</span>
      <StatusbarItem name="Home" link="/" />
      <StatusbarItem name="Contact" link="/contact" />
      <StatusbarItem name="About" link="/about" />
      <StatusbarItem name="Socials">
        <StatusbarMenuItem
          href="https://github.com/Aaditey-Nair"
          icon={faCodeBranch}
          name="GitHub"
        />
        <StatusbarMenuItem href="/" icon={faDove} name="Twitter" />
        <StatusbarMenuItem href="/" icon={faHashtag} name="Instagram" />
        <StatusbarMenuItem href="/" icon={faBriefcase} name="Linkedin" />
      </StatusbarItem>
    </nav>
  );
}

export default Statusbar;
