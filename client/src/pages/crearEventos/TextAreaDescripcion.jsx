import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function TextAreaDescripcion() {
  const navigate = useNavigate();
  const [valueText, setValueText] = useState("");
  const { state } = useLocation();
  useEffect(() => {
    console.log(state);
    if (state?.Description?.length > 1) {
      console.log("test" + state.Description);
      setValueText(state.Description);
    }
  }, [state]);

  const handleSubmit = () => {
    if (state) {
      const newState = { ...state, Description: valueText };
      navigate("/crearEventos/form", { state: newState });
    }
  };
  const handleChange = (e) => {
    setValueText(e.target.value);
  };

  return (
    <>
      <nav className="my-4 h-14 w-[360px] shrink-0">
        <span onClick={handleSubmit} className="cursor-pointer">
          <img src="/crear-eventos/close-icon.svg" alt="close" />
        </span>
      </nav>
      <div className="lg:flex lg:justify-center">
        <div className="lg:container">
          <h1 className="mt-4 text-base font-semibold not-italic leading-6 tracking-[0.1px] text-dark">
            Descripción del evento
          </h1>
          <p className="shrink-0 text-sm font-normal not-italic leading-4 tracking-[0.25px] text-grayA">
            Acá vas a poder poner toda la información necesaria sobre tu evento.
          </p>
          <form id="textarea" className="mt-4 flex flex-col justify-center ">
            <textarea
              type="text"
              className="h-40 shrink-0 self-stretch rounded-[15px] border border-solid border-dark p-[12px] outline-none focus:border-accent active:border-accent"
              placeholder="Descripción"
              value={valueText}
              onChange={handleChange}
              required
            />
            <div className="flex justify-center">
              <button
                disabled={valueText?.length < 1}
                onClick={handleSubmit}
                className="mt-64 flex w-full items-center justify-center gap-2 rounded-[15px] bg-primary p-4 text-center text-base font-medium not-italic leading-4 tracking-[0.4px] text-grayD  disabled:bg-grayC disabled:text-grayB lg:w-1/3"
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default TextAreaDescripcion;
