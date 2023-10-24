import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="flex space-x-4 bg-primary px-2">
        <li className="px-1 py-2">
            <Link to="/" className="flex flex-col items-center">
                <img src="/IconHome.svg" alt="Icon home" className=""/>
                <span className="text-white hover:text-yellow-400">Inicio</span>
            </Link>
        </li>
        <li className="px-1 py-2">
          <Link to="/events" className="flex flex-col items-center">
            <img src="/IconEvent.svg" alt="Icon event" />
            <span className="text-white">Eventos</span>
          </Link>
        </li>
        <li className="px-1 py-2">
          <Link to="/add-event" className="flex flex-col items-center">
            <img src="/IconAddEvent.svg" alt="Icon Add" />
            <span className="text-white">Publicar</span>
          </Link>
        </li>
        <li className="px-1 py-2">
          <Link to="/ticket" className="flex flex-col items-center">
            <img src="/IconTicket.svg" alt="Icon ticket" />
            <span className="text-white">Boletos</span>
          </Link>
        </li>
        <li className="px-1 py-2">
          <Link to="/profile" className="flex flex-col items-center">
            <img src="/IconProfile.svg" alt="Icon profile" />
            <span className="text-white">Perfil</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
