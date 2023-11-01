import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../components/UserProvider";
import InputSearch from "./InputSearch";

function NavbarDesktop({ namePlace, searchedEvent, onChangeHandler }) {
  const links = [
    {
      icon: "/iconNavbar/IconHome.svg",
      linkName: "Inicio",
      rute: "/",
      isLogged: true,
    },
    {
      icon: "/iconNavbar/IconEvent.svg",
      linkName: "Crear evento",
      rute: "/CrearEventos",
      isLogged: true,
    },
    {
      icon: "/iconNavbar/IconTicket.svg",
      linkName: "Boletos",
      rute: "/",
      isLogged: true,
    },
    {
      icon: "/iconNavbar/IconProfile.svg",
      linkName: "Perfil",
      rute: "/",
      isLogged: true,
    },
    {
      linkName: "Iniciar sesión",
      rute: "/login",
      isLogged: false,
    },
    {
      linkName: "Registrarse",
      rute: "/signup",
      isLogged: false,
    },
  ];
  let userLinks = [];
  const { currentUser } = useContext(UserContext);
  if (currentUser?.email) {
    userLinks = links.filter((link) => link.isLogged == true);
  } else {
    userLinks = links.filter((link) => link.isLogged == false);
  }

  return (
    <div className=" hidden md:block ">
      <div className="flex items-center justify-between ">
        <div>
          <span className="text-primary">Even</span>
          <span className="text-accent">Flow</span>
        </div>
        <InputSearch
          searchedEvent={searchedEvent}
          onChangeHandler={onChangeHandler}
        />
        <nav className="">
          <ul className="ml-0 mr-[50px] flex space-x-4">
            {userLinks.map((link, index) => {
              return (
                <li className="" key={index}>
                  <Link to={link.rute}>{link.linkName}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      {/* Location */}
      <div className="flex">
        <img src="/IconLocation.svg" alt="Icono de ubicación" />
        <div>
          {namePlace
            ? `${namePlace.address.state} ${namePlace.address.country}`
            : "Permitenos acceder a tu ubicación"}
        </div>
      </div>
    </div>
  );
}

export default NavbarDesktop;
