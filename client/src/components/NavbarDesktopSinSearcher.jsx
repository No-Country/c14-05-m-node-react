import { Link } from "react-router-dom";
import { UserContext } from "./UserProvider";
import { useContext } from "react";

function NavbarDesktop() {
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
      rute: "/boletos",
      isLogged: true,
    },
    {
      icon: "/iconNavbar/IconProfile.svg",
      linkName: "Perfil",
      rute: "/",
      isLogged: true,
    },
    {
      linkName: "Iniciar seción",
      rute: "/login",
      isLogged: false,
    },
    {
      linkName: "Registrarse",
      rute: "/signup",
      isLogged: false,
    },
  ];
  let userLinks = []
  const { currentUser } = useContext(UserContext);
  if(currentUser?.email){
    userLinks = links.filter(link=>link.isLogged==true)
  }else{
    userLinks = links.filter(link=>link.isLogged==false)
  }

  return (
    <div className=" hidden md:block fixed left-0 right-0 top-0 w-screen border border-b-4 bg-white p-4 mb-[-1rem]">
      <div className="flex items-center justify-between ">
        <div><span className="text-primary">Even</span><span className="text-accent">Flow</span></div>
        <nav className="">
          <ul className="ml-0 flex space-x-4 mr-[50px]">
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
    </div>
  );
}

export default NavbarDesktop;
