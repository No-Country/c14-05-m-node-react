import React from "react";
import { useNavigate } from "react-router-dom";

function EventoExito() {
  const navigate = useNavigate();
  const handleClickReservas = () => {
    navigate("/");
  };
  return (
    <div className="container text-center font-nunito">
      <img src="/crear-eventos/success.png" alt="exito" />

      <h1 className="max-w-[210px] text-center text-2xl font-normal not-italic leading-10 text-black ">
        ¡Evento confirmado con éxito!
      </h1>

      <p className="mb-9 mt-6  h-9 shrink-0 text-center text-sm font-normal not-italic leading-4 tracking-[0.25px] text-black">
        Recordá que podes pagar tu entrada en ventanilla hasta antes de ingresar
        al evento
      </p>
      <button
        className="mb-4 flex  w-[328px] items-center justify-center gap-2 rounded-[15px] bg-primary p-4"
        onClick={handleClickReservas}
      >
        <h1 className="text-white">Ver reserva</h1>
      </button>
      <button
        className="mb-4 flex w-[328px] items-center justify-center gap-2 rounded-[15px] border border-primary p-4"
        onClick={handleClickReservas}
      >
        <h1 className="text-primary">Ir a inicio</h1>
      </button>
    </div>
  );
}

export default EventoExito;
