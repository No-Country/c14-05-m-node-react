import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const links = [
    {
      icon: "/iconNavbar/IconHome.svg",
      linkName: "Inicio",
      rute:"/"
    },
    {
      icon: "/iconNavbar/IconEvent.svg",
      linkName: "Eventos",
      rute:"/"
    },
    {
      icon: "/iconNavbar/IconAddEvent.svg",
      linkName: "Publicar",
      rute:"/"
    },
    {
      icon: "/iconNavbar/IconTicket.svg",
      linkName: "Boletos",
      rute:"/"
    },
    {
      icon: "/iconNavbar/IconProfile.svg",
      linkName: "Perfil",
      rute:"/"
    },
  ]
  return (
    <div className="fixed bottom-0">
      <nav className="p-2 bg-primary w-screen flex justify-center">
        <ul className="flex space-x-2">
          {
            links.map((link,index)=>{
              return <li className="w-[60px]" key={index}>
                          <Link to={link.rute} className="flex flex-col items-center">
                              <img src={link.icon} alt="Icon home" className=""/>
                              <span className="text-white">{link.linkName}</span>
                          </Link>
                      </li>
            })
          }
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
