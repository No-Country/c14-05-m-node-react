import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { UserContext } from "../../components/UserProvider";

function CrearEventos() {
  const [isActive, setIsActive] = useState(true);
  const [eventos, setEventos] = useState([]);
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();

  const apiUrl = "http://localhost:3001/Eventos";
  function handleClickEvento() {
    navigate("/creareventos/Form");
  }
  const filterUserEvents = (data) => {
    const currentUserEvents = data?.filter(
      (events) => events?.userId == currentUser?.uid,
    );
    setEventos(currentUserEvents);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response?.data) {
          filterUserEvents(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function to make the request
  }, []);

  return (
    <>
      <nav className="hidden h-20 w-full bg-gray-300 lg:block ">
        placeholder navbar
      </nav>
      <div className="flex w-full items-center justify-center">
        <div className="flex w-full flex-col gap-4  font-nunito lg:container lg:items-center lg:justify-center">
          <h1 className="my-4 ml-3 mr-4 h-8 text-xl font-semibold not-italic leading-8 tracking-[0.15px] text-black lg:text-2xl">
            Crear evento
          </h1>
          <div className="flex h-8  flex-row gap-4 text-sm  lg:w-1/2">
            <div
              className={` duration-250 flex w-1/2 cursor-pointer items-center justify-center border-b-2 text-sm font-semibold  not-italic leading-4 tracking-[0.25px] text-primary transition lg:text-lg  ${
                isActive ? " border-b-primary" : "border-white"
              } `}
              onClick={() => setIsActive(!isActive)}
            >
              <h2>Activo</h2>
            </div>
            <div
              className={` duration-250 flex w-1/2 cursor-pointer items-center justify-center border-b-2 text-sm font-semibold   not-italic leading-4 tracking-[0.25px] text-primary transition lg:text-lg ${
                isActive ? "border-white" : " border-b-primary"
              } `}
              onClick={() => setIsActive(!isActive)}
            >
              <h2>Inactivo</h2>
            </div>
          </div>

          <div className="mb-40 mt-24 flex flex-col items-center justify-center lg:mt-10  ">
            <img
              src="/crear-eventos/emptyeventos.png"
              className="w-64 text-center text-base font-medium not-italic leading-4 tracking-[0.4px] text-dark lg:w-72"
              alt=""
            />
            <p className="lg:text-base">No tienes ningun eventos activo</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleClickEvento}
              className="btn-primary btn-md mx-6 mb-16  flex w-full  items-center justify-center rounded-[15px] p-4 lg:w-52"
            >
              <h1 className="text-grayd  text-center text-base font-medium not-italic leading-4 tracking-[0.4px] ">
                Crear evento
              </h1>
            </button>
          </div>

          <Navbar />
        </div>
      </div>
    </>
  );
}

export default CrearEventos;
