import Card from '../../components/Card'
import LinkIconVertical from '../../components/LinkIconVertical'
import Navbar from '../../components/Navbar'
import UserLocation from "./UserLocation"

function LandingPage() {
  return (
    <>
      <UserLocation />
      <section className='m-4'>
        <h2 className='text-dark'>Encontrá tu evento favorito</h2>
        <LinkIconVertical />
      </section>
      <section className='m-4 '>
        <h2 className='text-dark'>Próximos eventos en tu zona</h2>
        <div className='overflow-x-scroll'>
          <div className='flex  w-[1000px]'>
              <Card />
              <Card />
              <Card />
              <Card />
          </div>
        </div>
      </section>
      <section className='m-4'>
        <h2 className='text-dark'>Organizadores que seguis</h2>
      </section>
      <section className='m-4'>
        <h2 className='text-dark'>Eventos segun tu preferencia</h2>
      </section>
      <Navbar />
    </>

  )
}

export default LandingPage