let datosContacto = {
    telefono: '5554651563',
    correo: 'palmar@correo.com',
}
function Footer(){
    return(
        <div className="  h-40 bg-cafe-neutro mt-10 ">
            <div className="flex flex-wrap justify-between  items-center mx-auto w-11/12 md:max-w-[1200px] p-10 ">
                <div>
                    <p className="text-4xl  text-white font-bold ">El Palmar</p>
                </div>
                <div>
                    <p className="text-2xl  text-white font-bold ">Siguenos en:</p>
                    <div className="flex flex-row justify-center items-center space-x-5 mt-2 ">
                        <a href=" "><i className="fa-brands fa-whatsapp text-3xl text-white"></i></a>
                        <a href=" "><i className="fa-brands fa-facebook text-3xl text-white"></i></a>
                    </div>
                </div>
            
                
            </div>
        </div>
    );
}

export default Footer;