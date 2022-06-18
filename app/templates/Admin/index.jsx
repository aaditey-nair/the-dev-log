function Admin({ children }) {
  return (
    <div className="grid grid-cols-10 min-h-screen max-h-screen">
      <section className="bg-dark text-light col-span-2 font-mono border-r-2 border-stripe"></section>
      <section className="text-light col-span-full col-start-3 flex flex-col overflow-hidden">
        <main className="bg-dark p-4 max-h-full flex-grow overflow-auto">
          {children}
        </main>
      </section>
    </div>
  );
}

export default Admin;
