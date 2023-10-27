import React from "react";
import { Link } from "react-router-dom";
function LinkIconVertical({icon, type, route}) {
  return (
    <li className="bg-secondary rounded flex items-center justify-center">
        <Link to={route} className="flex flex-col items-center justify-center w-24 h-16 p-2">
            <img src={icon} alt="Icon home" className=""/>
            <span className="text-primary">{type}</span>
        </Link>
    </li>
  )
}

export default LinkIconVertical