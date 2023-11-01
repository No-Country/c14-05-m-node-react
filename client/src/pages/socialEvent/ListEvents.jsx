import Title2 from "../../components/Title2";
import CardHorizontal from "../../components/CardHorizontal";
import Navbar from "../../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

function ListEvents({ data }) {
  let navigate = useNavigate();

  return (
    <>
      <section>
        <Title2 title={"Segerencia de eventos"} />
        {data.map((d, index) => {
          return (
            <CardHorizontal
                key={index}
                img={d.image}
                title={d.titulo}
                date={d.fecha}
                hour={d.hora}
                place={d.ubicacion}
                price={d.costo}
                onClick={()=>navigate("/reservar-evento",{state:d})}
            />
          );
        })}
      </section>
      <Navbar />
    </>
  );
}

export default ListEvents;
