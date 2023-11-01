import Card from "../../components/Card";
import Title2 from "../../components/Title2";
import { useLocation, useNavigate } from "react-router-dom";

function NextEventYourZone({ data, namePlace }) {
  let navigate = useNavigate();
  const eventInMyZone = data.filter(
    (d) => d.provincia.toLowerCase() == namePlace.toLowerCase(),
  );
  return (
    <section className="m-4 ">
      <Title2 title={"Próximos eventos en tu zona"} />
      <div className="overflow-x-auto">
        <div className="flex space-x-2">
          {eventInMyZone.length > 0 ? (
            eventInMyZone.map((d, index) => {
              return (
                <Card
                  img={d.image}
                  title={d.titulo}
                  price={d.costo}
                  place={d.ubicacion}
                  date={d.fecha}
                  hour={d.hora}
                  key={index}
                  onClick={()=>{navigate("/reservar-evento",{state:d})}}
                />
              );
            })
          ) : (
            <p>No hay eventos en tu zona</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default NextEventYourZone;
