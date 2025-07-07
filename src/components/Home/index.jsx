import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <main className="text-center px-4 mt-24 mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900">
          Bienvenidas a la tienda de leggins deportivos
        </h1>
        <p className="mt-3 mx-auto text-gray-500">
          Accede al menu y revisa nuestra ropa deportiva
        </p>
        <section className="mt-16 mx-auto max-w-md">
          <article>
            <Link to="/leggins" className="btn-product">
              Ingresar al Catálogo
            </Link>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Home;
