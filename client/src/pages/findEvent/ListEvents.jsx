import { Link } from "react-router-dom";
import Title2 from "../../components/Title2"
import CardHorizontal from "../../components/CardHorizontal"
import Navbar from "../../components/Navbar"

function ListEvents() {
  return (
    <>
        <section>
            <Title2 title={"Segerencia de eventos"}/>
            <Link to="./reservar-evento">
                <CardHorizontal img="/ImageCard.svg" title={"Recorrido del terro"} date={"31/10/23"} hour={"23:00"} place={"Junin 233, Recoleta"} price={23} />
            </Link>
        </section>
        <Navbar />
    </>
  )
}

export default ListEvents