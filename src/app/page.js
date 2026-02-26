//importaciones
import imgComida from './../../public/img/comida.jpg'
import imgNovedad from './../../public/img/novedad.png'
import Image from 'next/image';
import CardComida from './components/comida/cardComida';


export const metadata ={
  title: "Inicio"
};

export default function Home() {
  return (
    <>
    {/* Imagen principal */}
    <div className='p-5'>
      <Image src={imgComida} alt='imagen de comida' className='mx-auto h-auto  md:h-[400px]' />
    </div>
    
    {/* Sección de novedades */}
    <div className='flex justify-center mt-10'>
      <div className='md:flex space-x-5  w-11/12 md:w-[700px]  '>
        <div className='grid justify-center'>
          <h2 className='text-4xl text-center md:text-left  font-semibold'>Novedades</h2>
          <Image src={imgComida} alt='imagen de comida' className=' h-auto  md:h-[200px] w-[300px] mt-5' />
        </div>
        <div className='text-center md:text-justify mt-5 md:mt-5'>
          <p className='text-3xl font-semibold mt-5'>Crema de pollo</p>
          <p className='text-xl'>Este platillo contiene sopa del día, arroz o espaguetti blanco y postre </p>
          <p className='font-semibold' id='precio-novedad'>$500</p>
        </div>
      </div>
    </div>

    {/* Sección de información sobre platillos */}
    <div className=' md:flex mt-10 mx-auto  w-11/12  md:w-full '>
      <div className='grid place-content-center border border-slate-300 rounded-lg bg-cafe-neutro :w-full md:w-100 mt-15 p-5'>
        <p className='text-white'>Cada platillo contiene Sopa del día, arroz o espaguetti blanco, postre y jarra con agua de sabor</p>

      </div>
      {/* Sección de Menú */}
      <div className='p-5  mx-auto'>
        <h3 className='font-semibold text-3xl'>Nuestro menú del día</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  mt-2 '>
          <CardComida/>
          <CardComida/>
          <CardComida/>

        </div>
      </div>
    </div>

    </>
  );
}
