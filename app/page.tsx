export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Mi Portfolio</h1>
          <p className="mt-4">Proyectos para clientes y empleadores</p>
        </div>
      </section>
      <section id="about" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Sobre Mí</h2>
          <p className="mt-4">Soy un desarrollador apasionado por crear soluciones innovadoras. Reemplaza este texto con tu información personal.</p>
        </div>
      </section>
      <section id="projects" className="py-20 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Proyectos</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold">Proyecto 1</h3>
              <p className="mt-2">Descripción del proyecto 1. Reemplaza con detalles reales.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold">Proyecto 2</h3>
              <p className="mt-2">Descripción del proyecto 2. Reemplaza con detalles reales.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold">Proyecto 3</h3>
              <p className="mt-2">Descripción del proyecto 3. Reemplaza con detalles reales.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contacto</h2>
          <p className="mt-4">Email: tuemail@example.com</p>
          <p>LinkedIn: [Tu LinkedIn]</p>
        </div>
      </section>
    </main>
  )
}