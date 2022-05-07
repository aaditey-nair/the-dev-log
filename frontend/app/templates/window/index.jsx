import PageHeader from "../../sections/PageHeader";
import Sidebar from "../../sections/Sidebar";

function Window({ children }) {
  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(16,_minmax(0,_1fr))] min-h-screen">
      <section className="bg-light col-span-full row-span-1 font-sans  border border-dark">
        Navbar
      </section>
      <section className="bg-dark p-4 text-light row-span-full row-start-2 font-mono  space-y-2 border border-accent">
        <Sidebar />
      </section>
      <section className="text-light col-span-3 row-span-full row-start-2 col-start-2  flex flex-col border border-accent">
        <PageHeader />
        <main className="bg-dark p-4  min-h-max flex-grow">{children}</main>
      </section>
    </div>
  );
}

export default Window;
