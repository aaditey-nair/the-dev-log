import Link from "next/link";
import { useState } from "react";
import OutsideClickHandler from "../OutsideClickHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Statusbar({ name, children, icon }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <OutsideClickHandler
      onClickOutside={() => {
        menuOpen && setMenuOpen(false);
      }}
    >
      {menuOpen && (
        <div className="absolute bottom-8 bg-accent p-4 text-light bg-opacity-80 space-y-2">
          {children}
        </div>
      )}
      <p
        onClick={(e) => {
          e.preventDefault();
          setMenuOpen(!menuOpen);
        }}
        className="select-none cursor-pointer text-sm"
      >
        <FontAwesomeIcon size="sm" icon={icon} />
        <span className="pl-1">{name}</span>
      </p>
    </OutsideClickHandler>
  );
}

export default Statusbar;
