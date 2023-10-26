import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import * as Yup from "yup";
import InputAuth from "../../components/InputAuth";
import LabelAuth from "../../components/LabelAuth";
import TopNavCrearEventos from "../../components/TopNavCrearEventos";
import { optionList } from "../../utils/Categorias";
import { customStyles } from "../../utils/styleSelect";

function Form() {
  const navigate = useNavigate();
  const [CurrentSelectedOption, SetCurrentSelectedOption] = useState(null);
  const [selectedOptionsList, setSelectedOptionsList] = useState(new Set());
  const [textArea, setTextArea] = useState("");

  const formik = useFormik({
    initialValues: {
      eventName: "",
      eventDescription: "",
      eventLocation: "",
    },
    validationSchema: Yup.object({
      eventName: Yup.string()
        .required("El nombre del evento es requerido")
        .max(35, "El nombre del evento tiene un maximo de 20 caracteres."),
      eventDescription: Yup.string()
        .required("La descripcion del evento es requerida")
        .max(
          280,
          "La descripcion del evento tiene un maximo de 280 caracteres.",
        ),
      eventLocation: Yup.string()
        .required("La ubicacion del evento es requerida")
        .max(100),
    }),
  });

  const handleSubmit = () => {
    const evento = {
      titulo: formik.values.eventName,
      descripcion: formik.values.eventDescription,
      image:
        "https://i.pinimg.com/originals/0e/92/70/0e92700ad79be25fa4cabd77c9f4e10e.jpg",
      etiquetas: "Otros",
      isActive: "true",
      provincia: "Mendoza",
      ubicacion: formik.values.eventLocation,
    };
    //vamos a enviar usando useNavigate
    navigate("/crearEventos/date", { state: evento });
  };

  function handleClickTextInput() {
    navigate("/CrearEventos/textarea");
    console.log("object");
  }

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      selectedOptionsList.add(selectedOption.value);
      setSelectedOptionsList(new Set(selectedOptionsList));

      SetCurrentSelectedOption(selectedOption);
    }
  };
  return (
    <>
      <TopNavCrearEventos />
      <div className="mb-4 mt-10 flex h-24 w-full flex-col items-center justify-center border-grayD">
        <img src="/crear-eventos/cameraicon.svg" alt="add-img" />
        <h2 className="text-sm font-semibold not-italic leading-4 tracking-[0.25px] text-[color:var(--grayscale-gray-a,#5B5B5B)]">
          Agregar imagen
        </h2>
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="flex flex-col">
          <InputAuth
            type="text"
            name="eventName"
            error={formik.touched.eventName && formik.errors.eventName}
            placeholder="Nombre del evento"
            onChange={formik.handleChange}
            value={formik.values.eventName}
            onBlur={formik.handleBlur}
            required
          />
          <LabelAuth
            htmlFor="eventName"
            error={formik.touched.eventName && formik.errors.eventName}
          ></LabelAuth>
        </div>

        <div className="flex flex-col">
          <InputAuth
            type="text"
            name="eventLocation"
            error={formik.touched.eventLocation && formik.errors.eventLocation}
            placeholder="Ingresá la ubicación"
            onChange={formik.handleChange}
            value={formik.values.eventLocation}
            onBlur={formik.handleBlur}
            required
          />
          <LabelAuth
            htmlFor="eventLocation"
            error={formik.touched.eventLocation && formik.errors.eventLocation}
          ></LabelAuth>
        </div>

        <div className="flex flex-col" onClick={handleClickTextInput}>
          <input
            className="h-12 min-w-[328px] cursor-pointer rounded-[15px] border border-dark pl-4 pr-10 text-base font-normal not-italic leading-4 tracking-[0.1px] text-dark outline-none "
            placeholder="Descripción del evento"
            value={textArea}
          />
        </div>

        <div className="mt-4  flex w-[328px] flex-col text-dark">
          <Select
            options={optionList}
            styles={customStyles}
            placeholder="Etiquetas"
            value={CurrentSelectedOption}
            onChange={handleChange}
            formatOptionLabel={({ label, icon }) => (
              <div className="flex w-[328px] flex-row items-center gap-4  text-sm font-semibold not-italic leading-4 tracking-[0.25px] text-grayA">
                {icon} {label}
              </div>
            )}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {Array.from(selectedOptionsList).map((value, index) => (
            <div
              className="flex items-center gap-2 rounded-[15px] bg-primary px-3 py-1 text-white"
              key={index}
            >
              <p className=" text-sm font-normal not-italic leading-6 tracking-[0.25px]">
                {value}
              </p>
            </div>
          ))}
        </div>

        <button
          className="btn-primary btn-md  mb-16  mt-72  flex w-[328px] items-center justify-center rounded-[15px] p-4"
          onClick={() => handleClickTextInput}
        >
          <h1 className="text-center text-sm text-white ">Continuar</h1>
        </button>
      </div>
    </>
  );
}

export default Form;
