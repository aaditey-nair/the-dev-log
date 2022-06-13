import PageHeader from "../../components/PageHeader";
import Statusbar from "../../sections/Statusbar";
import Sidebar from "../../sections/Sidebar";

function Window({ children }) {
  return (
    <div className="grid grid-cols-10 grid-rows-[repeat(22,_minmax(0,_1fr))] min-h-screen max-h-screen">
      <section className="bg-dark text-light col-span-2 row-span-full font-mono border-r-2 border-stripe">
        <Sidebar />
      </section>
      <section className="text-light col-span-full row-span-full col-start-3 flex flex-col overflow-hidden">
        <PageHeader />
        <main className="bg-dark p-4 max-h-full flex-grow overflow-auto">
          {children}
        </main>
      </section>
      <section className="bg-accent col-span-full row-span-1 font-sans text-light z-50 border-t-2 border-stripe">
        <Statusbar />
      </section>
    </div>
  );
}

export default Window;
