import PageHeader from "../../components/PageHeader";
import Sidebar from "../../sections/Sidebar";

function Window({ children }) {
  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(16,_minmax(0,_1fr))] min-h-screen">
      <section className="bg-accent col-span-full row-span-1 font-sans">
        Navbar
      </section>
      <section className="bg-dark text-light row-span-full row-start-2 font-mono border-r border-t-2 border-stripe">
        <Sidebar />
      </section>
      <section className="text-light col-span-3 row-span-full row-start-2 col-start-2 border-l border-stripe flex flex-col">
        <PageHeader />
        <main className="bg-dark p-4  min-h-max flex-grow">{children}</main>
      </section>
    </div>
  );
}

export default Window;
