import { useContext, useEffect } from "react";
import LegginContext from "../../../contexts/leggin/LegginContext";
import { Link } from "react-router-dom";

const LegginList = () => {
  const ctx = useContext(LegginContext);
  const { leggins, getLeggins } = ctx;

  useEffect(() => {
    getLeggins();
  }, []);

  return (
    <>
      <section className="max-w-7xl mx-auto py-16 px-8 grid grid-cols-1 gap-y-4 gap-x-12 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
        {leggins.length === 0 ? (
          <p>No hay Leggins</p>
        ) : (
          leggins.map((leggin) => {
            return (
              <div key={leggin._id} className="border flex flex-col">
                <div className="bg-gray-200">
                  <Link to={`/leggins/${leggin._id}`} state={{leggin}}>
                    <img
                      src={leggin.img}
                      alt={leggin.description}
                      className="w-full h-130 object-center object-cover"
                    />
                  </Link>
                </div>

                <div className="flex-1 p4 space-y-2 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 ">
                    {leggin.name}
                  </h3>
                  <p className="text-gray-500 pb-8">{leggin.description}</p>
                  <Link
                    to={`/leggins/${leggin._id}`}
                    state={{ leggin }}
                    className="btn-product"
                  >
                    <button type="button" className="w-full">
                      Ver Detalles
                    </button>
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </section>
    </>
  );
};

export default LegginList;
