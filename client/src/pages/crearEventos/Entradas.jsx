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

  return (
    <>
      <TopNavCrearEventos />

      <div className="mt-9 flex flex-col items-center justify-center gap-4">
        <div className="">
          <label htmlFor="nombreEntradas">Nombre de la entrada</label>
          <InputAuth
            type="text"
            name="nombreEntradas"
            error={
              formik.touched.nombreEntradas && formik.errors.nombreEntradas
            }
            placeholder="Nombre del evento"
            onChange={formik.handleChange}
            value={formik.values.nombreEntradas}
            onBlur={formik.handleBlur}
            required
          />
          <label htmlFor="name">
            Ingresá un nombre corto y fácil de recordar
          </label>
        </div>
        <div>
          <label htmlFor="precioEntradas">Precio de la entrada</label>
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
          />

          <label>
            <input type="checkbox" /> Evento gratuito
          </label>
        </div>
        <div>
          <label htmlFor="cantidadEntradas">
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
