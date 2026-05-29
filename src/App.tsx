import "./App.css";
import ProdutoCard from "./ProdutoCard";
import WelcomePage from "./WelcomePage";

function App() {
  return (
    <main className="min h-screen bg-slate-100 p-8 text-slate">
      <h1 className="text-3xl font-bold">React + Tailwind</h1>
      <p className="mt-2 text-slate-600">Projeto Configurado!</p>

      <ProdutoCard />
      <WelcomePage />
    </main>
  );
}

export default App;
