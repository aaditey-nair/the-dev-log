import Sidebar from "../../sections/Sidebar";

function Window() {
  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(16,_minmax(0,_1fr))] p-4 gap-4 min-h-screen">
      <section className="bg-light col-span-full row-span-1 font-sans rounded-lg">
        Navbar
      </section>
      <section className="bg-accent p-4 text-light row-span-full row-start-2 font-mono rounded-lg space-y-2">
        <Sidebar />
      </section>
      <section className="text-light col-span-3 row-span-full row-start-2 col-start-2 rounded-lg">
        Main
      </section>
    </div>
  );
}

export default Window;
