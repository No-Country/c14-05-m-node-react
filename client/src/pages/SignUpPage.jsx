import axios from "axios";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { auth, googleProvider } from "../../firebase-config";
import InputAuth from "../components/InputAuth";
import LabelAuth from "../components/LabelAuth";

function RegisterPage() {
  //Despues hay que implementar react query por ahora esto anda
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isError, setError] = useState(false);
  const apiUrl = "http://localhost:3001/user";

  const navigate = useNavigate();

  const signWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      if (user) {
        const data = formatGoogleUserData(user);

        sentNewUserToBackEndGoogle(data);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  const formatGoogleUserData = (user) => {
    const fullName = user.displayName;
    const [nombre, apellido] = fullName.split(" ");
    const id = user.uid;
    return {
      id: id,
      nombre: nombre,
      apellido: apellido,
      email: user.email,
      isActive: true,
    };
  };

  const sentNewUserToBackEndGoogle = async (data) => {
    let response;
    try {
      response = await axios.post(apiUrl, data);
      if (response.status === 201) {
        console.log("Usuario Creado");
        navigate("/onboarding");
      }
    } catch (error) {
      if (error.response?.status === 409) {
        console.log("El usuario ya existe logueando...");
        navigate("/");
      } else {
        setError(true);
      }
    }
  };

  const sentNewUserToBackEnd = async (user) => {
    try {
      const data = {
        id: user.uid,
        nombre: formik.values.name,
        apellido: formik.values.lastName,
        email: formik.values.email,
        isActive: true,
      };
      const response = await axios.post(apiUrl, data);
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
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
    },
  });

  const createNewUser = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (user) {
        sentNewUserToBackEnd(user);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const tooglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

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

  function handleBlur() {
    setError(false);
  }

  return (
    <div className="sm:flex sm:items-center sm:justify-center">
      <div className="container sm:max-w-lg 2xl:max-w-4xl ">
        <form onSubmit={formik.handleSubmit} className=" flex w-full flex-col ">
          <h1 className="mb-4 text-left  text-xl font-semibold not-italic leading-8 tracking-[0.15px] sm:text-center sm:text-2xl 2xl:mb-8 2xl:text-center 2xl:text-4xl 2xl:leading-10 2xl:tracking-[0.25px]">
            Registrate
          </h1>
          {inputFields.map((field) => (
            <React.Fragment key={field.name}>
              <InputAuth
                type={field.type}
                name={field.name}
                error={formik.touched[field.name] && formik.errors[field.name]}
                placeholder={field.placeholder}
                onChange={formik.handleChange}
                value={formik.values[field.name]}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  setError(false);
                }}
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
              onBlur={(e) => {
                formik.handleBlur(e);
                setError(false);
              }}
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
          <div className="flex items-center justify-center">
            <button
              className="btn-primary btn-md mb-16 mt-8 flex items-center justify-center rounded-[15px] p-4 xl:h-16 xl:w-72 xl:rounded-none"
              type="submit"
            >
              <h1 className="text-center text-sm  text-white 2xl:text-base">
                Registrarse
              </h1>
            </button>
          </div>
        </form>
        {isError ? (
          <span className="text center mb-4 text-error">
            <h1>Error al crear el usuario </h1>
          </span>
        ) : (
          ""
        )}

        <div className=" mb-8 h-[1px] w-72 bg-grayB xl:hidden"></div>
        <button
          onClick={signWithGoogle}
          className="hover:opacity-85 mb-5 flex h-12  w-[90%] items-center justify-center gap-4 rounded-[14px] border border-dark p-[10px] outline-none active:bg-gray-200 active:opacity-90 xl:h-14 xl:rounded-none"
        >
          <img src="/IconoGoogle.svg" alt="google icon" />
          <p>Iniciar sesión con Google</p>
        </button>
        <button className="hover:opacity-85 mb-5 flex h-12  w-[90%] items-center justify-center gap-4 rounded-[14px] border border-dark p-[10px] outline-none active:bg-gray-200 active:opacity-90 xl:h-14 xl:rounded-none">
          <img src="/iconoFacebook.svg" alt="facebook icon" />

          <p>Iniciar sesión con Facebook</p>
        </button>
      </div>
    </div>
  );
}

export default RegisterPage;
