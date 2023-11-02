import { useLocation, useNavigate } from "react-router-dom";
import BackPage from "../../components/BackPage";
import Title1 from "../../components/Title1";
import Title2 from "../../components/Title2";
import NavbarDesktopSinSearcher from "../../components/NavbarDesktopSinSearcher";

function ReserveTicket({}) {
  const { state } = useLocation();
  let navigate = useNavigate();
  return (
    <>
      <NavbarDesktopSinSearcher />
      <div className={window.innerWidth <= 768 ? "flex flex-col items-center" : "flex flex-col items-center my-[74px]"}>
        <div className="mb-4 space-y-4 w md:w-1/2 xl:w-1/3 ">
          {/* header */}
          <div className="mt-4 flex justify-between md:hidden">
            <BackPage />
            <img src="/IconFavorite.svg" alt="Icono de me gusta" />
          </div>
          {/* main image */}
          <div className="-mx-4">
            <img
              src={state.image}
              alt="Imagen del evento"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Data event */}
          <div className="space-y-4">
            <Title1 title={state.titulo}></Title1>
            <div className="flex justify-between">
              <span>
                Organizado por{" "}
                <span className="text-accent">{state.userId}</span>
              </span>
              <button className="rounded-2xl border border-secondary px-5 py-1 text-xs text-primary">
                Seguir
              </button>
            </div>
            <div className="space-y-2 rounded-2xl bg-secondary p-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/reserveTicket/IconLocation.svg"
                  alt="Icono de ubicación"
                  className=""
                />
                <p>{state.ubicacion}</p>
              </div>
              <div className="flex space-x-16">
                <div className="flex items-center space-x-2">
                  <img
                    src="/reserveTicket/IconCalendar.svg"
                    alt="Icono de calendario"
                    className=""
                  />
                  <p>{state.fecha}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/reserveTicket/IconClock.svg"
                    alt="Icono de hora"
                    className=""
                  />
                  <p>{state.hora}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="/reserveTicket/IconPrice.svg"
                  alt="Icono de precio"
                  className=""
                />
                <p>{state.costo}</p>
              </div>
            </div>
          </div>
          <section>
            <Title2 title={"Información"} />
            <p>{state.descripcion}</p>
          </section>
          <button
            className="btn-primary w-full rounded-[15px] p-4"
            type="button"
            onClick={() => navigate("/detalle-reserva", { state: state })}
          >
            Reservar entrada
          </button>
        </div>
      </div>
    </>
  );
}

export default ReserveTicket;
