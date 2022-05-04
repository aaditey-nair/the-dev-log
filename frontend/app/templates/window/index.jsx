import React from "react";

function Window() {
  return (
    <div className="grid grid-cols-4 grid-rows-16 p-4 gap-4 min-h-screen">
      <section className="bg-light col-span-full row-span-1">Navbar</section>
      <section className="bg-accent text-light row-span-full row-start-2">
        Sidebar
      </section>
      <section className="bg-accent text-light col-span-3 row-span-full row-start-2 col-start-2">
        Main
      </section>
    </div>
  );
}

export default Window;
