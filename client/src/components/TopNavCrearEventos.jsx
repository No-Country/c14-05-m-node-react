import React from "react";
import { Link } from "react-router-dom";

function TopNavCrearEventos({ url }) {
  return (
    <>
      <div className="flex h-14 w-[360px]  items-center justify-start gap-1 ">
        <Link to={url}>
          <img src="/crear-eventos/back-arrow.svg" alt="go-back" />
        </Link>

        <h1 className="text-xl font-semibold not-italic leading-8 tracking-[0.15px] text-dark ">
          Crear evento
        </h1>
      </div>

      <div className=" ">
        <div className="flex flex-row items-center justify-center">
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-primary text-center ">
            <p className="text-sm font-semibold leading-4 tracking-[0.2px] text-secondary">
              1
            </p>

            <h2 className="absolute -bottom-4 -left-[21px] text-xs font-medium leading-4 tracking-[0.2px] text-dark">
              Descripción
            </h2>
          </div>
          <div className="h-[1px] w-28 bg-grayB"></div>
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-primary text-center">
            <p className="text-sm font-semibold leading-4 tracking-[0.2px] text-secondary ">
              2
            </p>

            <h2 className="absolute -bottom-4 -left-[30px] w-20 text-xs  font-medium leading-4 tracking-[0.2px] text-dark">
              Fecha y hora
            </h2>
          </div>
          <div className="h-[1px] w-28 bg-grayB"></div>
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-primary text-center">
            <p className="text-sm font-semibold leading-4 tracking-[0.2px] text-secondary">
              3
            </p>
            <h2 className="absolute -bottom-4  -left-[11px] text-xs font-medium leading-4 tracking-[0.2px]  text-dark">
              Entradas
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavCrearEventos;
