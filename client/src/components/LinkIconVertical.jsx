import React from "react";
import { Link } from "react-router-dom";
function LinkIconVertical() {
  return (
    <ul className="flex my-2">
        <li className="px-2 py-2 bg-secondary rounded w-16 h-16">
            <Link to="/" className="flex flex-col items-center">
                <img src="/IconMusic.svg" alt="Icon home" className=""/>
                <span className="text-primary">Música</span>
            </Link>
        </li>
    </ul>
  )
}

export default LinkIconVertical