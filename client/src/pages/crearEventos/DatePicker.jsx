import { useMaskito } from "@maskito/react";
import React, { useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NavbarDesktop from "../../components/NavbarDesktopSinSearcher";

import DateInput from "../../components/DateInput";
import TimeInput from "../../components/TimeInput";
import TopNavCrearEventos from "../../components/TopNavCrearEventos";

function DatePicker() {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const navigate = useNavigate();
  //recibimos el state desde usenavigate

  const { state } = useLocation();

  function handleSubmit() {
    const newState = { ...state, hora: startTime, fecha: startDate };
    navigate("/crearEventos/entradas", { state: newState });
  }

  return (
    <>
      <NavbarDesktop />

      <div className="flex flex-col items-center justify-center lg:mt-4">
        <TopNavCrearEventos url={"/crearEventos/Form"} completed={1} />
        <div className="flex flex-col items-center lg:container lg:max-w-3xl">
          <div className="flex w-full flex-col justify-start">
            <h1 className="hidden text-4xl font-semibold not-italic leading-10 tracking-[0.25px] text-black lg:block ">
              Fecha y hora
            </h1>
            <h2 className="mt-10 h-8 w-full shrink-0 text-left text-base font-semibold not-italic leading-6 tracking-[0.1px] text-dark lg:mt-3 lg:text-base lg:font-normal">
              Ingresá la fecha y hora de tu evento
            </h2>
          </div>

          <div className="lg:w-full">
            <h3 className="mt-4 text-sm font-semibold not-italic leading-4 tracking-[0.25px] text-dark lg:text-base">
              Comienza
            </h3>
            <div className="mt-2 flex flex-row flex-nowrap gap-4 lg:justify-start">
              <DateInput key="2" saveDate={setStartDate} />
              <TimeInput key="3" saveTime={setStartTime} />
            </div>
          </div>

          <div className="lg:w-full">
            <h3 className="text-dak mt-6 text-sm font-semibold not-italic leading-4 tracking-[0.25px] lg:text-base ">
              Finaliza
            </h3>
            <div className="mt-2 flex flex-row flex-nowrap gap-4">
              <DateInput key="1" saveDate={setEndDate} />
              <TimeInput key="4" saveTime={setEndTime} />
            </div>
          </div>

          <button
            className="btn-primary btn-md mx-6 mb-16  mt-72  flex w-[328px] items-center justify-center rounded-[15px] p-4 disabled:bg-grayC disabled:text-grayB lg:mt-60"
            onClick={handleSubmit}
          >
            <h1 className="text-center text-sm text-white ">Continuar</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default DatePicker;
