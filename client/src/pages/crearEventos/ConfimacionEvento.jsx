import axios from "axios";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../../components/UserProvider";

function ConfimacionEvento() {
  const { state } = useLocation();
  const { currentUser } = useContext(UserContext);

  async function handleSubmit() {
    //tienen que dejar pasar una string mas larga los de back
    const id = currentUser?.uid;
    const data = { ...state, userid: id };
    const apiUrl = "http://localhost:3001/Eventos";
    //hacemos un post con el state al server
    console.log(currentUser);
    try {
      const response = await axios.post(apiUrl, data);
      console.log(response);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex h-14 w-[360px]  items-center justify-start gap-1 font-nunito">
        <Link to={"../creareventos"}>
          <img src="/crear-eventos/close-icon.svg" alt="close" />
        </Link>

        <h1 className="text-xl font-semibold not-italic leading-8 tracking-[0.15px] text-dark ">
          Confirmación del evento
        </h1>
      </div>
      <div className="mb-4 flex flex-col">
        <div className="mb-[4px] mt-10 flex h-[152] w-full flex-col items-center justify-center border-grayD">
          <img src={state.image} alt="img" className="rounded-[15px]" />
        </div>
        <h1 className="text-xl font-semibold not-italic leading-8 tracking-[0.15px] text-black">
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

          <p className="text-sm font-normal not-italic leading-4 tracking-[0.25px] text-dark">
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

          <p className="text-sm font-normal not-italic leading-4 tracking-[0.25px] text-dark">
            {state.fecha}
          </p>
        </div>
        <div className="flex flex-nowrap items-center justify-start gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary">
            <img src="/crear-eventos/icon-horario.svg" alt="icono-horario" />
          </span>

          <p className="text-sm font-normal not-italic leading-4 tracking-[0.25px] text-dark">
            {state.hora}
          </p>
        </div>
        <div className="flex flex-nowrap items-center justify-start gap-2">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-primary">
            <img src="/crear-eventos/icono-precio.svg" alt="icono-precio" />
          </span>
          <p className="text-sm font-normal not-italic leading-4 tracking-[0.25px] text-dark">
            {`$ ${state.costo} `}
          </p>
        </div>
        <div>
          <h1 className="text-base font-semibold not-italic leading-6 tracking-[0.1px] text-black">
            Descripción del evento
          </h1>
          <p>{state.descripcion}</p>
        </div>
        <div className="tags-del-evento flex flex-nowrap gap-2  text-sm font-normal not-italic leading-6 tracking-[0.25px] text-secondary">
          {/*         {state?.etiquetas //para cuando se arregle lo de solo poder mandar 1 etiqueta
            ? Array.from(state.etiquetas).map((value, index) => (
                <>
                  <span
                    className="flex w-fit items-center gap-2 rounded-[15px] bg-primary px-3 py-1"
                    key={index}
                  >
                    {value}
                  </span>
                </>
              ))
            : ""} */}
          <span className="flex w-fit items-center gap-2 rounded-[15px] bg-primary px-3 py-1">
            Musica
          </span>
        </div>
        <div className="mb-16 mt-8 flex w-full items-center  justify-center">
          <button
            className="btn-primary btn-md    flex w-[328px]  items-center justify-center rounded-[15px] p-4 "
            onClick={handleSubmit}
          >
            <h1 className="text-center text-sm text-white ">Continuar</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfimacionEvento;
