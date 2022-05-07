import NavItem from "../../components/NavItem";
import NavMenuItem from "../../elements/NavMenuItem";
import {
  faBriefcase,
  faCodeBranch,
  faDove,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="flex items-center px-4 h-full gap-4">
      <span className="font-mono text-primary">dev.log()</span>
      <NavItem name="Home" link="/" />
      <NavItem name="Contact" link="/contact" />
      <NavItem name="About" link="/about" />
      <NavItem name="Socials">
        <NavMenuItem href="/" icon={faCodeBranch} name="GitHub" />
        <NavMenuItem href="/" icon={faDove} name="Twitter" />
        <NavMenuItem href="/" icon={faHashtag} name="Instagram" />
        <NavMenuItem href="/" icon={faBriefcase} name="Linkedin" />
      </NavItem>
    </div>
  );
}

export default Navbar;
