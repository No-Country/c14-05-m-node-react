import Card from '../../components/Card'
import LinkIconVertical from '../../components/LinkIconVertical'
import Navbar from '../../components/Navbar'
import './landingPage.css'
import UserLocation from "./UserLocation"

function LandingPage() {
  return (
    <>
      <UserLocation />
      <section>
        <h2>Encontrá tu evento favorito</h2>
        <LinkIconVertical />
      </section>
      <section>
        <h2>Próximos eventos en tu zona</h2>
        <Card />
      </section>
      <section>
        <h2>Organizadores que seguis</h2>
      </section>
      <section>
        <h2>Eventos segun tu preferencia</h2>
      </section>
      <Navbar />
    </>

  )
}

export default LandingPage