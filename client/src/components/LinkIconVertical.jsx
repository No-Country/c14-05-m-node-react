import React from "react";
import { Link } from "react-router-dom";
function LinkIconVertical() {
  return (
    <ul className="flex space-x-4 px-2">
        <li className="px-1 py-2">
            <Link to="/" className="flex flex-col items-center">
                <img src="/IconHome.svg" alt="Icon home" className=""/>
                <span className="text-white">Inicio</span>
            </Link>
        </li>
    </ul>
  )
}

export default LinkIconVertical