import Link from "next/link";
import { useState } from "react";

function NavItem({ name, children, link }) {
  if (children) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div>
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
      </div>
    );
  } else {
    return (
      <Link href={link}>
        <a>{name}</a>
      </Link>
    );
  }
}

export default NavItem;
