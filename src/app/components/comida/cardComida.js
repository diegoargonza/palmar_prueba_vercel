import Image from "next/image"
import ImgNovedad from './../../../../public/img/novedad.png'
export default function cardComida(){
    return(
        <>
        <div className="flex space-x-4  items-center border border-slate-300 shadow-md shadow-slate-500 rounded-md p-4">
            <Image src={ImgNovedad} alt="" className="w-60 h-60 rounded-full"/>
            <div className="flex flex-col">
                <h3 className="font-semibold w-auto"> Nombre de Comida</h3>
                <p className="text-xl" >Chiles con relleno de carne</p>
                <p className="font-semibold" id="precio-comida">$100</p>
            </div>
        </div>
        
        </>
    )
}

