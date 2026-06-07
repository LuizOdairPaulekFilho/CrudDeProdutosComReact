export function WelcomePage() {
  return (
    <main className="min-h-screen bg-gray-200 pt-10">
      <section className="flex flex-col items-center">
        <h1 className="font-bold text-2xl mb-20">Bem-vindo ao painel</h1>
        <p className="mt-4 mb-10">Gerencie seus produtos em um só lugar</p>
        <button className="mt-6 px-6 py-2 bg-blue-200 rounded">
          Entrar no sistema
        </button>
      </section>
    </main>
  );
}

export default WelcomePage;
