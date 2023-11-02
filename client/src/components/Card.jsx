const Card = ({img, title, price, place, date, hour,onClick}) => {
  return (
    <div className="rounded shadow-lg" onClick={onClick}>
      <div className="w-[320px]">
        <img
          src={img}
          alt="Imagen del evento"
          className="w-full h-40 object-cover"
        />
        <div className="w-full px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 mb-2 flex">
            <img src="/IconPrice.svg" alt="Icono de precio" />
            <span className="px-2">{price}</span>
          </p>
          <p className="text-gray-700 mb-2 text-base flex">
            <img src="/IconLocation.svg" alt="Icono de ubicación" />
            <span className="px-2">{place}</span>
          </p>
          <div className="flex justify-between">
            <p className="text-gray-700 text-base flex">
              <img src="/IconCalendar.svg" alt="Icono de calendario" />
              <span className="px-2">{date}</span>
            </p>
            <p className="text-gray-700 text-base flex">
              <img src="/IconClock.svg" alt="Icono de reloj" />
              <span className="px-2">{hour}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
