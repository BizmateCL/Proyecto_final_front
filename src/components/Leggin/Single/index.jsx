import { useLocation } from "react-router-dom";

const SingleLeggin = () => {
    const location = useLocation(); //para tener los datos del producto
    const { leggin } = location?.state;
    return (
        <>
            <main className="max-w-7xl mx-auto pt-16 pb-24 px-8 lg:grid lg:grid-cols-2 lg:gap-x-16">
                <section>
                    <h1 className="text-4xl font-bold"> {leggin.name}</h1>
                    <div className="mt-4">
                        <p className="text-gray-500">{leggin.description}</p>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-3xl"> {new Intl.NumberFormat("es-CL", { style: 'currency', currency: 'CLP', }).format(leggin.price)}</h1>
                    </div>
                </section>
                <figure className="mt-8 col-start-2 row-span-2">
                    <img
                        src={leggin.img}
                        alt={leggin.name}
                        className="w-full object-center object-cover"
                    />
                </figure>
            </main>
        </>
    )
}

export default SingleLeggin;
