import { useMaskito } from "@maskito/react";
import React, { useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

    console.log(newState);
    navigate("/crearEventos/entradas", { state: newState });
  }
  return (
    <div className="flex flex-col items-center justify-center">
      <TopNavCrearEventos />

      <h2 className="mt-10 h-8 w-full shrink-0 text-left text-base font-semibold not-italic leading-6 tracking-[0.1px] text-dark">
        Ingresá la fecha y hora de tu evento
      </h2>

      <div>
        <h3 className="mt-4 text-sm font-semibold not-italic leading-4 tracking-[0.25px] text-dark">
          Comienza
        </h3>
        <div className="mt-2 flex flex-row flex-nowrap gap-4">
          <DateInput key="2" saveDate={setStartDate} />
          <TimeInput key="3" saveTime={setStartTime} />
        </div>
      </div>

      <div>
        <h3 className="text-dak mt-6 text-sm font-semibold not-italic leading-4 tracking-[0.25px] ">
          Finaliza
        </h3>
        <div className="mt-2 flex flex-row flex-nowrap gap-4">
          <DateInput key="1" saveDate={setEndDate} />
          <TimeInput key="4" saveTime={setEndTime} />
        </div>
      </div>

      <button
        className="btn-primary btn-md mx-6 mb-16  mt-72  flex w-[328px] items-center justify-center rounded-[15px] p-4 disabled:bg-grayC disabled:text-grayB"
        onClick={handleSubmit}
      >
        <h1 className="text-center text-sm text-white ">Continuar</h1>
      </button>
    </div>
  );
}

export default DatePicker;
