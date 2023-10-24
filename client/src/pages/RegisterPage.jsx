import { createUserWithEmailAndPassword } from "firebase/auth";
import { useField, useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { auth } from "../../firebase-config";
import InputAuth from "../components/InputAuth";
import LabelAuth from "../components/LabelAuth";

function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const createNewUser = async (email, password) => {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(user);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(25, "Nombre tiene que ser 25 caracteres o menos")
        .required("Nombre es requerido"),
      lastName: Yup.string()
        .max(25, "Apellido tiene que ser 25 caracteres o menos")
        .required("Apellido es requerido"),
      email: Yup.string()
        .email("El email es invalido")
        .required("Email es requerido"),
      userName: Yup.string()
        .max(15, "Nombre de usuario tiene que ser 15 caracteres o menos")
        .required("Nombre de usuario  es requerido"),
      password: Yup.string()
        .max(25, "Contraseña tiene que ser 25 caracteres o menos")
        .min(6, "Contraseña tiene que ser 6 caracteres o mas")
        .required("Contraseña es requerida"),
    }),

    onSubmit: ({ email, password }) => {
      createNewUser(email, password);
      formik.resetForm();
      navigate("/login");
    },
  });

  const tooglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  //Hay que mover a un archivo aparte pero en que carpeta?
  const inputFields = [
    {
      label: "Nombre",
      name: "name",
      type: "text",
      placeholder: "Nombre",
    },
    {
      label: "Apellido",
      name: "lastName",
      type: "text",
      placeholder: "Apellido",
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "Email",
    },
    {
      label: "Nombre de usuario",
      name: "userName",
      type: "text",
      placeholder: "Nombre de usuario",
    },
  ];

  return (
    <div className="container font-nunito ">
      <form onSubmit={formik.handleSubmit} className="w-[90%] flex flex-col ">
        <h1 className="text-left text-xl mb-4">Registrate</h1>
        {inputFields.map((field) => (
          <React.Fragment key={field.name}>
            <InputAuth
              type={field.type}
              name={field.name}
              error={formik.touched[field.name] && formik.errors[field.name]}
              placeholder={field.placeholder}
              onChange={formik.handleChange}
              value={formik.values[field.name]}
              onBlur={formik.handleBlur}
              required
            />
            <LabelAuth
              htmlFor={field.name}
              error={formik.touched[field.name] && formik.errors[field.name]}
            >
              {field.label}
            </LabelAuth>
          </React.Fragment>
        ))}

        <div className="relative text-left">
          <InputAuth
            type={`${isPasswordVisible ? "text" : "password"}`}
            name="password"
            placeholder="Contraseña"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password}
            required
          />

          <span
            className="absolute bottom-[13px] right-4 cursor-pointer "
            onClick={tooglePassword}
          >
            <img
              src={`${
                isPasswordVisible ? "/input/icon_1.svg" : " /input/icon.svg"
              }`}
            />
          </span>
        </div>
        <LabelAuth
          htmlFor="password"
          error={formik.touched.password && formik.errors.password}
        ></LabelAuth>

        <button
          className="btn-primary btn-md rounded-[15px] p-4 mb-8 h-12 mt-8 flex justify-center items-center"
          type="submit"
        >
          <h1 className="text-center text-sm text-white">Registrarse</h1>
        </button>
      </form>
      <div className=" mb-8 h-[1px] bg-grayB w-72"></div>
      <button className="h-12 border  p-[10px] rounded-[14px] mb-5 outline-none w-[90%] border-dark flex justify-center items-center gap-4 active:opacity-90 active:bg-gray-200 hover:opacity-85">
        <img src="/IconoGoogle.svg" alt="google icon" />
        <p>Iniciar sesión con Google</p>
      </button>
      <button className="h-12 border  p-[10px] rounded-[14px] mb-5 outline-none w-[90%] border-dark flex justify-center items-center gap-4 active:opacity-90 active:bg-gray-200 hover:opacity-85">
        <img src="/iconoFacebook.svg" alt="facebook icon" />

        <p>Iniciar sesión con Facebook</p>
      </button>
    </div>
  );
}

export default RegisterPage;
