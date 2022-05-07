import Link from "next/link";
import { useState } from "react";
import OutsideClickHandler from "../OutsideClickHandler";

function NavItem({ name, children, link }) {
  if (children) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <OutsideClickHandler
        onClickOutside={() => {
          if (menuOpen) {
            setMenuOpen(false);
          }
        }}
      >
        <span
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(!menuOpen);
          }}
          className="select-none cursor-pointer"
        >
          {name}
        </span>
        {children && menuOpen && (
          <div className="absolute bg-dark p-4 text-light bg-opacity-80 space-y-2">
            {children}
          </div>
        )}
      </OutsideClickHandler>
    );
  } else {
    return <a href={link}>{name}</a>;
  }
}

export default NavItem;
