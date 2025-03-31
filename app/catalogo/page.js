export default function Catalogo() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h1 className="text-4xl font-bold">Catálogo de Lentes</h1>
      <p className="text-lg mt-2 opacity-70">Descubre nuestros modelos exclusivos.</p>
      <a href="/" className="mt-5 px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-gray-900 transition-all">
        Volver al Inicio
      </a>
    </main>
  );
}
