import { useFormik } from "formik";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import InputAuth from "../../components/InputAuth";
import TopNavCrearEventos from "../../components/TopNavCrearEventos";

function Entradas() {
  const navigate = useNavigate();

  const { state } = useLocation();
  const [IsFree, setIsFree] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombreEntradas: "",
      precioEntradas: "",
      cantidadEntradas: "",
    },
    validationSchema: Yup.object({
      nombreEntradas: Yup.string()
        .required("El nombre del evento es requerido")
        .max(20, "El nombre del evento tiene un maximo de 20 caracteres."),
      cantidadEntradas: Yup.number(),
      precioEntradas: Yup.number().required("El Precio es requerido"),
    }),
  });

  function handleSubmit() {
    const newState = { ...state, costo: formik.values.precioEntradas };

    console.log(newState);

    navigate("/crearEventos/confirmar", { state: newState });
  }
  function handleCheck(e) {
    setIsFree(e.target.cheked);
    formik.values.precioEntradas = 0;
  }

  return (
    <>
      <TopNavCrearEventos url={"/crearEventos/date"} />

      <div className="mt-9 flex flex-col items-center justify-center gap-4">
        <div className="">
          <label
            className=" h-4 shrink-0 text-sm font-semibold not-italic leading-4 tracking-[0.25px] text-dark"
            htmlFor="nombreEntradas"
          >
            Nombre de la entrada
          </label>
          <InputAuth
            type="text"
            name="nombreEntradas"
            error={
              formik.touched.nombreEntradas && formik.errors.nombreEntradas
            }
            placeholder="Ingresá un nombre"
            onChange={formik.handleChange}
            value={formik.values.nombreEntradas}
            onBlur={formik.handleBlur}
            required
          />
          <label
            htmlFor="name"
            className="pl-4 text-xs font-medium not-italic leading-4 tracking-[0.2px] text-dark"
          >
            Ingresá un nombre corto y fácil de recordar
          </label>
        </div>
        <div>
          <label
            htmlFor="precioEntradas"
            className="shrink-0 text-sm font-semibold not-italic leading-4 tracking-[0.25px] text-black"
          >
            Precio de la entrada
          </label>
          <InputAuth
            type="text"
            name="precioEntradas"
            error={
              formik.touched.precioEntradas && formik.errors.precioEntradas
            }
            placeholder="Ingresá un precio"
            onChange={formik.handleChange}
            value={formik.values.precioEntradas}
            onBlur={formik.handleBlur}
            required
            disabled={IsFree}
          />

          <label
            htmlFor="checkbox"
            className=" text-base font-normal not-italic leading-4 tracking-[0.1px] text-black"
          >
            <input
              type="checkbox"
              name="checkbox"
              onChange={(e) => handleCheck(e)}
            />
            Evento Gratuito
          </label>
        </div>
        <div>
          <label
            htmlFor="cantidadEntradas"
            className="shrink-0 text-sm font-semibold not-italic leading-4 tracking-[0.25px] text-black"
          >
            Cantidad de entradas a la venta
          </label>
          <InputAuth
            type="text"
            name="cantidadEntradas"
            error={
              formik.touched.cantidadEntradas && formik.errors.cantidadEntradas
            }
            placeholder="Ingresá un número de entradas"
            onChange={formik.handleChange}
            value={formik.values.cantidadEntradas}
            onBlur={formik.handleBlur}
            required
          />
        </div>

        <button
          className="btn-primary btn-md  mb-16  mt-72  flex w-[328px] items-center justify-center rounded-[15px] p-4"
          onClick={handleSubmit}
        >
          <h1 className="text-center text-sm text-white ">Continuar</h1>
        </button>
      </div>
    </>
  );
}

export default Entradas;
