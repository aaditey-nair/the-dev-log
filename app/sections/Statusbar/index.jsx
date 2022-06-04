import NavItem from "../../components/StatusbarItem";
import NavMenuItem from "../../elements/StatusbarMenuItem";
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
      <NavItem name="Home" link="/" />
      <NavItem name="Contact" link="/contact" />
      <NavItem name="About" link="/about" />
      <NavItem name="Socials">
        <NavMenuItem
          href="https://github.com/Aaditey-Nair"
          icon={faCodeBranch}
          name="GitHub"
        />
        <NavMenuItem href="/" icon={faDove} name="Twitter" />
        <NavMenuItem href="/" icon={faHashtag} name="Instagram" />
        <NavMenuItem href="/" icon={faBriefcase} name="Linkedin" />
      </NavItem>
    </nav>
  );
}

export default Statusbar;
