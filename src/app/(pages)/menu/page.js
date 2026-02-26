import CardComida from "../../components/comida/cardComida";
export const metadata={
    title: "Menú"
};

function Menu(){
    let comidasDía = {
    contenidoPaquete: 'Sopa del día, arroz o espaguetti blanco, postre y jarra de agua de sabor',
    precio: '$150',
    comidas:  {
        opcion1: 'Chicharron en salsa verde',
        opcion2: 'Pechugas de pollo',
        opcion3: 'Tacos dorados',
        opcion4: 'Mole con pollo',

    },
    comidasEspeciales: {
      novedad1: 'Chiles en nogada',
    },
}


    return(
        <>
        <div className=" ">
            <div className="mt-10  p-5">
                <div className="text-center">
                    <h1 className="  text-5xl md:text-6xl lg:text-8xl font-bold">Comida del día</h1>
                    <p className="text-2xl font-semibold mt-2">La mejor comida en El Palmar</p>
                </div>
                <div className="md:flex space-x-10 items-center  md:px-50 mt-10">
                    <p className="font-bold text-justify">En paquete: <span className="font-normal ">{comidasDía.contenidoPaquete}</span></p>
                    <p className="bg-verde-elementos  text-white text-center md:text-left rounded-md font-bold p-3 w-full sm:w-80 md:w-50 mt-5 md:mt-0 ">Precio: <span className="font-normal">{comidasDía.precio}</span></p>
                </div>
                <div className="flex flex-col text-center space-y-10 mt-10 ">
                    <p className="text-3xl font-bold">Platillo fuerte</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto ">
                        <CardComida/>
                        <CardComida/>
                        <CardComida/>
                    </div>
                </div>

            </div>
        </div>
        </>
    );
}

export default Menu;