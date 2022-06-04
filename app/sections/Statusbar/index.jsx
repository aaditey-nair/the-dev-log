import StatusbarItem from "../../components/StatusbarItem";
import StatusbarMenuItem from "../../elements/StatusbarMenuItem";
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";

function Statusbar() {
  return (
    <nav className="flex items-center px-4 py-1 h-full gap-4">
      <StatusbarMenuItem
        href="https://github.com/Aaditey-Nair"
        icon={faCodeBranch}
        name="Socials"
      />
    </nav>
  );
}

export default Statusbar;
