import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function CrearEventos() {
  const [isActive, setIsActive] = useState(true);
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();

  const apiUrl = "http://localhost:3001/eventos";
  function handleClickEvento() {
    navigate("/creareventos/Form");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        if (response.data) {
          setEventos(response.data);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function to make the request
  }, []);

  return (
    <div className="flex flex-col gap-4  font-nunito">
      <h1 className="my-4 ml-4 h-8 text-xl font-semibold">Crear Evento</h1>
      <div className="flex h-8  flex-row gap-4 text-sm ">
        <div
          className={`flex w-1/2 cursor-pointer items-center justify-center border-b-2 text-primary transition  ${
            isActive ? " border-b-primary" : "border-white"
          } `}
          onClick={() => setIsActive(!isActive)}
        >
          <h2>Activo</h2>
        </div>
        <div
          className={`tramsiti flex w-1/2 cursor-pointer items-center justify-center border-b-2 text-primary ${
            isActive ? "border-white" : " border-b-primary"
          } `}
          onClick={() => setIsActive(!isActive)}
        >
          <h2>Inactivo</h2>
        </div>
      </div>

      <div className="mb-40 mt-24 flex flex-col items-center justify-center  ">
        <img src="/crear-eventos/emptyeventos.png" className="w-64" alt="" />
        <p>No tienes ningun eventos activo</p>
      </div>
      <button
        onClick={handleClickEvento}
        className="btn-primary btn-md mx-6 mb-16  flex  items-center justify-center rounded-[15px] p-4"
      >
        <h1 className="text-center text-sm text-white ">Crear evento</h1>
      </button>
      <Navbar />
    </div>
  );
}

export default CrearEventos;
