export function DashboardSketch() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-800 text-white p-4">
        <h1 className="text-xl font-bold mb-6">Admin</h1>
        <nav className="flex flex-col gap-3">
          <button className="text-left p-2 hover:bg-slate-600">Resumo</button>
          <button className="text-left p-2 hover:bg-slate-600">Produtos</button>
        </nav>
      </aside>

      <div className="flex flex-col flex-1 p-6">
        <header className="h-16 bg-white border-b flex items-center px-6">
          <h2 className="text-xl font-semibold">Gestão de Produtos</h2>
        </header>

        <main className="flex-1 bg-gray-100 flex items-center justify-center">
          <section className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl text-center">
            <h3 className="text-lg font-bold mb-4">Área do CRUD</h3>
            <p>Aqui ficará o formulário e a tabela de produtos.</p>
          </section>
        </main>

        <footer className="h-14 bg-white border-t flex items-center justify-center px-6">
          Projeto React + Tailwind
        </footer>
      </div>
    </div>
  );
}

export default DashboardSketch;
