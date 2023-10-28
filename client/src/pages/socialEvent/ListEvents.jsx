import { Link } from "react-router-dom";
import Title2 from "../../components/Title2";
import CardHorizontal from "../../components/CardHorizontal";
import Navbar from "../../components/Navbar";

function ListEvents({ data }) {
  return (
    <>
      <section>
        <Title2 title={"Segerencia de eventos"} />
        {data.map((d, index) => {
          return (
            <Link to="/reservar-evento" key={index}>
              <CardHorizontal
                img={d.image}
                title={d.titulo}
                date={d.fecha}
                hour={d.hora}
                place={d.ubicacion}
                price={d.costo}

              />
            </Link>
          );
        })}
      </section>
      <Navbar />
    </>
  );
}

export default ListEvents;
