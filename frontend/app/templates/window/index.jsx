import PageHeader from "../../components/PageHeader";
import Sidebar from "../../sections/Sidebar";

function Window({ children }) {
  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(22,_minmax(0,_1fr))] min-h-screen max-h-screen">
      <section className="bg-accent col-span-full row-span-1 font-sans row-start-1">
        Navbar
      </section>
      <section className="bg-dark text-light row-span-full font-mono border-r border-t-2 border-stripe row-start-2">
        <Sidebar />
      </section>
      <section className="text-light col-span-3 row-span-full col-start-2 border-l border-stripe flex flex-col overflow-hidden row-start-2">
        <PageHeader />
        <main className="bg-dark p-4 max-h-full flex-grow overflow-auto">
          {children}
        </main>
      </section>
    </div>
  );
}

export default Window;
