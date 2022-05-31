import PageHeader from "../../components/PageHeader";
import Navbar from "../../sections/Navbar";
import Sidebar from "../../sections/Sidebar";

function Window({ children }) {
  return (
    <div className="grid grid-cols-4 grid-rows-[repeat(22,_minmax(0,_1fr))] min-h-screen max-h-screen">
      <section className="bg-dark text-light row-span-full font-mono border-r border-t-2 border-stripe">
        <Sidebar />
      </section>
      <section className="text-light col-span-3 row-span-full col-start-2 border-l border-stripe flex flex-col overflow-hidden">
        <PageHeader />
        <main className="bg-dark p-4 max-h-full flex-grow overflow-auto">
          {children}
        </main>
      </section>
      <section className="bg-accent col-span-full row-span-1 font-sans text-light z-50">
        <Navbar />
      </section>
    </div>
  );
}

export default Window;
