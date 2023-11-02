import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavbarDesktop from "../../components/NavbarDesktopSinSearcher";
import { UserContext } from "../../components/UserProvider";

function ConfimacionEvento() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { currentUser } = useContext(UserContext);
  const [isError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit() {
    setIsLoading(true);
    setError(false);
    const id = currentUser?.uid;
    const data = { ...state, userid: id };
    const apiUrl = "https://api-rvi6.onrender.com/Eventos";
    //hacemos un post con el state al server
    try {
      const response = await axios.post(apiUrl, data);
      if (response.status === 201) {
        navigate("CrearEventos/evento-confirmado");
      }
      console.log(response);
    } catch (error) {
      setIsLoading(false);
      setError(true);
      console.log("error");
      console.log(error);
    }
  }

  return (
    <>
      <NavbarDesktop />

      <div className="flex h-14 w-[360px]  items-center justify-start gap-1 font-nunito lg:hidden">
        <Link to={"../creareventos"}>
          <img src="/crear-eventos/close-icon.svg" alt="close" />
        </Link>

        <h1 className="text-xl font-semibold not-italic leading-8 tracking-[0.15px] text-dark ">
          Confirmación del evento
        </h1>
      </div>

      <div className="mt-0 flex flex-col items-center justify-center gap-6">
        <div className="lg:container lg:max-w-3xl">
          <div className="mb-4 flex flex-col lg:h-[]">
            <div className=" mb-[4px] mt-10 flex w-full flex-col items-center justify-center border-grayD">
              <img
                src={state.image}
                alt="img"
                className="h-[152px] w-full rounded-[15px] lg:h-[250px] "
              />
            </div>
            <h1 className="text-xl font-semibold not-italic leading-8 tracking-[0.15px] text-black lg:text-2xl">
              {state.titulo}
            </h1>
          </div>
          <h2 className="mb-[14px] text-base font-semibold not-italic leading-6 tracking-[0.1px] text-black">
            Información básica
          </h2>
          <div className="flex flex-col justify-center gap-5">
            <div className="flex flex-nowrap items-center justify-start gap-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary">
                <img
                  src="/crear-eventos/icono-ubicacion.svg"
                  alt="icono-ubicacion"
                />
              </span>

              <p className="text-sm font-normal not-italic leading-4 tracking-[0.25px] text-dark lg:text-base">
                {state.ubicacion}
              </p>
            </div>
            <div className="flex flex-nowrap items-center justify-start gap-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary">
                <img
                  src="/crear-eventos/icono-calendario.svg"
                  alt="icono-calendario"
                />
              </span>

              <p className="text-sm font-normal not-italic leading-4 tracking-[0.25px] text-dark lg:text-base">
                {state.fecha}
              </p>
            </div>
            <div className="flex flex-nowrap items-center justify-start gap-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary ">
                <img
                  src="/crear-eventos/icon-horario.svg"
                  alt="icono-horario"
                />
              </span>

              <p className="text-sm font-normal not-italic leading-4 tracking-[0.25px] text-dark lg:text-base">
                {state.hora}
              </p>
            </div>
            <div className="flex flex-nowrap items-center justify-start gap-2">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary">
                <img src="/crear-eventos/icono-precio.svg" alt="icono-precio" />
              </span>
              <p className="text-sm font-normal not-italic leading-4 tracking-[0.25px] text-dark lg:text-base">
                {`$ ${state.costo} `}
              </p>
            </div>
            <div>
              <h1 className="text-base font-semibold not-italic leading-6 tracking-[0.1px] text-black ">
                Descripción del evento
              </h1>
              <p className="">{state.descripcion}</p>
            </div>
            <div className="tags-del-evento flex flex-nowrap gap-2  text-sm font-normal not-italic leading-6 tracking-[0.25px] text-secondary">
              {/*         {state?.etiquetas //para cuando se arregle lo de solo poder mandar 1 etiqueta
            ? Array.from(state.etiquetas).map((value, index) => (
                <>
                  <span
                    className="flex w-fit items-center gap-2 rounded-[15px] bg-primary px-3 py-1 lg:text-base"
                    key={index}
                  >
                    {value}
                  </span>
                </>
              ))
            : ""} */}
              <span className="flex w-fit items-center gap-2 rounded-[15px] bg-primary px-3 py-1 lg:text-base">
                Musica
              </span>
            </div>
            <div className="mb-16 mt-8 flex w-full items-center  justify-center">
              <button
                className="btn-primary btn-md    flex w-[328px]  items-center justify-center rounded-[15px] p-4 "
                onClick={handleSubmit}
              >
                <h1 className="text-center text-sm text-white lg:text-base ">
                  Continuar
                </h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfimacionEvento;
