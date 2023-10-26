import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function TextAreaDescripcion() {
  const navigate = useNavigate();
  const [valueText, setValueText] = useState("");

  const handleClose = () => {
    if (valueText?.length >= 1) {
      handleSubmit();
    } else {
      navigate(-1);
    }
  };
  const handleSubmit = () => {
    if (valueText?.length >= 1) {
      navigate("/crearEventos/form", { state: valueText });
    }
  };
  const handleChange = (e) => {
    setValueText(e.value);
  };

  return (
    <>
      <nav className="my-4 h-14 w-[360px] shrink-0">
        <span onClick={handleClose} className="cursor-pointer">
          <img src="/crear-eventos/close-icon.svg" alt="close" />
        </span>
      </nav>
      <h1 className="mt-4 text-base font-semibold not-italic leading-6 tracking-[0.1px] text-dark">
        Descripción del evento
      </h1>
      <p className="shrink-0 text-sm font-normal not-italic leading-4 tracking-[0.25px] text-grayA">
        Acá vas a poder poner toda la información necesaria sobre tu evento.
      </p>
      <form id="textarea" className="mt-4 flex flex-col justify-center ">
        <input
          type="text"
          className="h-40 shrink-0 self-stretch rounded-[15px] border border-solid border-[color:var(--grayscale-dark,#242424)] p-[12px] outline-none focus:border-accent active:border-accent"
          placeholder="Descripción"
          value={valueText}
          onChange={handleChange}
          required
        />
        <button
          disabled={valueText?.length < 1}
          onClick={handleSubmit}
          className=" mt-72 flex items-center justify-center gap-2 rounded-[15px] bg-primary p-4 text-center text-base font-medium not-italic leading-4 tracking-[0.4px] text-grayD  disabled:bg-grayC disabled:text-grayB"
        >
          Guardar
        </button>
      </form>
    </>
  );
}

export default TextAreaDescripcion;
