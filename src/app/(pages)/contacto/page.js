export const metadata={
    title: "Contacto"
};

let datosContacto = {
    telefono: '5554651563',
    correo: 'palmar@correo.com',
}

function Contacto(){
    return(
        <>
        <h1 className="text-5xl md:text-6xl lg:text-8xl text-center font-bold mt-20 ">Contáctanos</h1>
        <div className="flex flex-col items-center  w-[900px] mx-auto">
            <p>Si quieres realizar una reservación o contratarnos para tu evento, dejanos tus datos</p>
            <div className="flex space-x-5 justify-center mt-10 ">
                    <div className="flex border border-verde-elementos bg-cafe-neutro rounded-2xl w-60 h-50 p-5">
                        <div className="flex flex-col  text-center">
                            <i className="fa-solid fa-utensils text-white text-4xl"></i>
                            <p className="text-white text-center ">Sabor casero</p>
                            <p className="text-white text-center text-xl">Recetas tradicionales con sabor</p>
                        </div>
                    </div>
                    <div className="flex border border-verde-elementos bg-cafe-neutro rounded-2xl w-60 h-50 p-5">
                        <div className="flex flex-col  text-center">
                            <i class="fa-solid fa-heart text-white text-4xl"></i>
                            <p className="text-white text-center ">Comunidad</p>
                            <p className="text-white text-center text-xl">Punto de encuentro favorito</p>
                        </div>
                    </div>
                    <div className="flex border border-verde-elementos bg-cafe-neutro rounded-2xl w-60 h-50 p-5">
                        <div className="flex flex-col  text-center">
                            <i class="fa-solid fa-coins text-white text-4xl"></i>
                            <p className="text-white text-center ">Precio justo</p>
                            <p className="text-white text-center text-xl">Calidad en nuestros productos</p>
                        </div>
                    </div>
                </div>
        </div>
       
        </>
    );
}

export default Contacto;