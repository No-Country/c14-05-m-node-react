import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { auth, googleProvider } from "../../firebase-config";
import InputAuth from "../components/InputAuth";
import LabelAuth from "../components/LabelAuth";
import { UserContext } from "../components/UserProvider";
import LoggedUserPage from "./LoggedUserPage";

function Login() {
  const { currentUser } = useContext(UserContext);
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
      }
    } catch (error) {
      setError(true);
      console.log("Error al logearse ");
    }
  };
  const tooglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  console.log(currentUser?.email);

  return (
    <>
      <div className="xl:flex xl:items-center xl:justify-center">
        <div className="container mt-52 flex flex-col items-center font-nunito 2xl:max-w-4xl">
          <form
            onSubmit={formik.handleSubmit}
            className="relative flex  w-full flex-col"
          >
            <h1 className="mb-4 text-left text-xl font-semibold not-italic leading-8 tracking-[0.15px] 2xl:mb-20 2xl:text-center 2xl:text-4xl 2xl:leading-10 2xl:tracking-[0.25px] ">
              Iniciar sesión
            </h1>
            <InputAuth
              type="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
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

            <div className="relative text-left ">
              <InputAuth
                type={`${isPasswordVisible ? "text" : "password"}`}
                name="password"
                placeholder="Contraseña"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.touched.password && formik.errors.password}
                onBlur={(e) => {
                  formik.handleBlur(e);
                  setError(false);
                }}
                required
              />

              <span
                className="2xl: absolute bottom-[13px] right-4 cursor-pointer "
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
                className="btn-primary btn-md mb-16 mt-8 flex items-center justify-center rounded-[15px] p-4 2xl:h-16 2xl:w-72 2xl:rounded-none"
                type="submit"
              >
                <h1 className="text-center text-sm text-white 2xl:text-base ">
                  Iniciar sesión
                </h1>
              </button>
            </div>
          </form>
          {isError ? (
            <span className="text center text-error 2xl:text-lg">
              <h1>Email o Contraseña incorrecto</h1>
            </span>
          ) : (
            ""
          )}

          <h2 className="text-center text-base font-normal text-dark xl:mb-8 2xl:text-lg ">
            ¿No tenés cuenta?
            <Link to={"../signup"} className="ml-1 font-bold">
              Registrate
            </Link>
            .
          </h2>
          <div className="mb-8 mt-4 h-[1px] w-72 bg-grayB xl:hidden "></div>
          <button
            className="hover:opacity-85 mb-5 flex h-12  w-[90%] items-center justify-center gap-4 rounded-[14px] border border-dark p-[10px] outline-none active:bg-gray-200 active:opacity-90 2xl:h-14 2xl:rounded-none"
            onClick={signWithGoogle}
          >
            <img src="/IconoGoogle.svg" alt="google icon" />
            <p>Iniciar sesión con Google</p>
          </button>
          <button className="hover:opacity-85 mb-5 flex h-12  w-[90%] items-center justify-center gap-4 rounded-[14px] border border-dark p-[10px] outline-none active:bg-gray-200 active:opacity-90 2xl:h-14 2xl:rounded-none">
            <img src="/iconoFacebook.svg" alt="facebook icon" />

            <p>Iniciar sesión con Facebook</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
