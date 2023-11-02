import React from "react";

function UserLocation({namePlace}) {
  console.log(namePlace)
  return (

    <div className='block md:hidden'>
      <div className=" flex justify-between">
        <div className="flex">
          <img src="/IconLocation.svg" alt="Icono de ubicación" />
          <div>
            {namePlace
              ? `${namePlace.address.state} ${namePlace.address.country}`
              : "Permitenos acceder a tu ubicación"}
          </div>
        </div>
        <img src="/IconNotification.svg" alt="Icono de notificación" />
      </div>
    </div>
  );
}

export default UserLocation;
