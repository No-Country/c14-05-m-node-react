import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { auth, googleProvider } from "../../firebase-config";
import InputAuth from "../components/InputAuth";
import LabelAuth from "../components/LabelAuth";
import LoggedUserPage from "./LoggedUserPage";

function Login({ currentUser }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isError, setError] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("El email es invalido")
        .required("Email es requerido"),
      password: Yup.string()
        .max(25, "Contraseña tiene que ser 25 caracteres o menos")
        .min(6, "Contraseña tiene que ser 6 caracteres o mas")
        .required("Contraseña es requerida"),
    }),
    onSubmit: ({ email, password }) => {
      signInWithEmail(email, password);
    },
  });

  const signInWithEmail = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      if (user) {
        const userToken = await user.getIdToken();
        console.log("ID Token:", userToken);
      }
    } catch (err) {
      setError(true);
      //
      console.log(err.message);
    }
  };
  const signWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      console.log(user);
      if (user) {
        //Esto seria el token que tenemos que mandar al back
        const userToken = await user.getIdToken();
        console.log("ID Token:", userToken);
      }
    } catch (error) {
      setError(true);
      console.log("Error al logearse ");
    }
  };
  const tooglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      {currentUser ? (
        <LoggedUserPage currentUser={currentUser} />
      ) : (
        <div className="flex flex-col items-center font-nunito container mt-52">
          <form
            onSubmit={formik.handleSubmit}
            className="w-[90%] flex flex-col relative"
          >
            <h1 className="text-left text-xl mb-4  ">Iniciar sesión</h1>
            <InputAuth
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.password && formik.errors.password}
              onBlur={(e) => {
                formik.handleBlur(e);
                setError(false);
              }}
              required
            />
            <LabelAuth
              htmlFor="email"
              error={formik.touched.email && formik.errors.email}
            ></LabelAuth>

            {tooglePassword}
            <div className="relative text-left ">
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
                required
              />

              <LabelAuth
                htmlFor="password"
                error={formik.touched.password && formik.errors.password}
              ></LabelAuth>
              <span
                className="absolute bottom-[35px] right-4 cursor-pointer "
                onClick={tooglePassword}
              >
                <img
                  src={`${
                    isPasswordVisible ? "/input/icon_1.svg" : " /input/icon.svg"
                  }`}
                />
              </span>
            </div>
            <button
              className="btn-primary btn-md rounded-[15px] p-4 mb-16 mt-8 flex justify-center items-center"
              type="submit"
            >
              <h1 className="text-center text-sm text-white ">
                Iniciar sesión
              </h1>
            </button>
          </form>
          {isError ? (
            <span className="text center text-error">
              <h1>Email o Contraseña incorrecto</h1>
            </span>
          ) : (
            ""
          )}

          <h2 className="text-center text-dark font-normal text-base ">
            ¿No tenés cuenta?
            <Link to={"../signup"} className="font-bold ml-1">
              Registrate
            </Link>
            .
          </h2>
          <div className="mt-4 mb-8 h-[1px] bg-grayB w-72"></div>
          <button
            className="h-12 border  p-[10px] rounded-[14px] mb-5 outline-none w-[90%] border-dark flex justify-center items-center gap-4 active:opacity-90 active:bg-gray-200 hover:opacity-85"
            onClick={signWithGoogle}
          >
            <img src="/IconoGoogle.svg" alt="google icon" />
            <p>Iniciar sesión con Google</p>
          </button>
          <button className="h-12 border  p-[10px] rounded-[14px] mb-5 outline-none w-[90%] border-dark flex justify-center items-center gap-4 active:opacity-90 active:bg-gray-200 hover:opacity-85">
            <img src="/iconoFacebook.svg" alt="facebook icon" />

            <p>Iniciar sesión con Facebook</p>
          </button>
        </div>
      )}
    </>
  );
}

export default Login;
