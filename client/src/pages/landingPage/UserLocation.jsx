import React from "react";

function UserLocation({namePlace}) {

  return (

    <div className='fixed top-0 left-0 bg-white p-4 w-screen'>
      <div className=" flex justify-between">
        <div className="flex">
          <img src="/IconLocation.svg" alt="Icono de ubicación" />
          <div>
            {namePlace
              ? `${namePlace.address.state} ${namePlace.address.country}`
              : "Permitenos acceder a tu ubicación"}
          </div>
        </div>
        <img src="/IconNotification.svg" alt="Icono de ubicación" />
      </div>
    </div>
  );
}

export default UserLocation;
