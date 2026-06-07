export function SummaryCards() {
  return (
    <section className="grid gap-4 mt-8 border-black-100 md:grid-cols-3">
      <article className="bg-white border-3 rounded-lg p-2">
        <p className="text-sm text-gray-700">Produtos cadastrados</p>

        <strong className="mt-2 block text-2xl font-bold">12</strong>
      </article>

      <article className="bg-white border-3 rounded-lg p-2">
        <p className="text-sm text-gray-700">Produtos ativos</p>

        <strong className="mt-2 block text-2xl font-bold">9</strong>
      </article>

      <article className="bg-white border-3 rounded-lg p-2">
        <p className="text-sm text-gray-700">Baixo estoque</p>

        <strong className="mt-2 block text-2xl font-bold">3</strong>
      </article>
    </section>
  );
}

export default SummaryCards;
