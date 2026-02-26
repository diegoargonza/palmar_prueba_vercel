import cocina from "../../assets/img/img-cocina.png"
import Image from "next/image";

export const metadata={
    title: "Nosotros"
};


function Nosotros(){
    return(
        <>
        <div className=" place-content-center mt-10 md:mt-20  p-8  w-11/12 md:w-auto">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold">Nosotros</h1>
            <div className="md:flex   space-x-10 items-center  mt-15 ">
                <div className="mt-10 md:mt-0 text-justify w-full ">
                    <p>Es una cocina económica ubicada en el corazón del Estado de México, dedicada a ofrecer platillos caseros con sabor auténtico y precios accesibles para toda la comunidad. Nuestro compromiso va más allá de la comida: buscamos crear un espacio cálido y familiar donde cada visitante se sienta como en casa.</p>
                </div>
            </div>
            <div className="md:flex  space-x-1 md:space-x-4 items-center mt-25">
                <div className="mx-auto">
                    <Image src={cocina} alt="" className="w-full md:w-[500px] h-[200px] rounded-lg"></Image>
                </div>
                <div className="flex space-x-3 md:space-x-5 justify-center  mt-10 md:mt-0">
                    <div className="flex border border-verde-elementos bg-verde-elementos rounded-2xl w-40 md:w-60 h-50 p-5">
                        <div className="flex flex-col  text-center">
                            <i className="fa-solid fa-utensils text-white text-2xl md:text-4xl"></i>
                            <p className="text-white text-center text-xl md:text-2xl">Sabor casero</p>
                            <p className="text-white text-center text-sm md:text-xl mt-2">Recetas tradicionales con sabor</p>
                        </div>
                    </div>
                    <div className="flex border border-verde-elementos bg-verde-elementos rounded-2xl w-40 md:w-60 h-50 p-5">
                        <div className="flex flex-col  text-center">
                            <i className="fa-solid fa-heart text-white text-2xl md:text-4xl"></i>
                            <p className="text-white text-center text-xl md:text-2xl">Comunidad</p>
                            <p className="text-white text-center text-sm md:text-xl mt-2">Punto de encuentro favorito</p>
                        </div>
                    </div>
                    <div className="flex border border-verde-elementos bg-verde-elementos rounded-2xl w-40 md:w-60 h-50 p-5">
                        <div className="flex flex-col  text-center">
                            <i className="fa-solid fa-coins text-white  text-2xl md:text-4xl"></i>
                            <p className="text-white text-center text-xl md:text-2xl ">Precio justo</p>
                            <p className="text-white text-center text-sm md:text-xl mt-2">Calidad en nuestros productos</p>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
        </>
    );
}

export default Nosotros;