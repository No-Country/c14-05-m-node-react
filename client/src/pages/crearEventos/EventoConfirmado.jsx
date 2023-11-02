import React from "react";
import { useNavigate } from "react-router-dom";
function EventoConfirmado() {
  const navigate = useNavigate();
  return (
    <>
      <NavbarDesktop />

      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col items-center lg:container lg:mt-0 lg:max-w-xl">
          <img
            src="/crear-eventos/success.png"
            alt="imagen de proceso finalizado"
            className="h-[16.125rem] w-[16.125rem] lg:h-[455px] lg:w-[477px] "
          />
          <h1 className="mb-11 text-center text-2xl font-semibold not-italic leading-10 text-dark lg:text-4xl">
            ¡Evento confirmado con éxito!
          </h1>

          <button
            className="btn-primary mb-4 w-full rounded-[15px] p-4 text-center text-sm font-normal not-italic leading-6 tracking-[0.5px]  lg:h-14 lg:w-80 lg:rounded-none lg:text-base"
            type="button"
            onClick={() => navigate("/crearEventos")}
          >
            Ver evento
          </button>
          <button
            className="w-full rounded-[15px] border border-primary p-4 text-primary lg:hidden"
            type="button"
            onClick={() => navigate("/")}
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </>
  );
}

export default EventoConfirmado;
