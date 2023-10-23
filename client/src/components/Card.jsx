const Card = () => {
  return (
    <div className="rounded shadow-lg">
      <div className="w-[320px]">
        <img
          src="/ImageCard.svg"
          alt="Event"
          className="w-full h-40 object-cover"
        />
        <div className="w-full px-6 py-4">
          <div className="font-bold text-xl mb-2">Product Title</div>
          <p className="text-gray-700 mb-2 flex">
            <img src="/IconPrice.svg" alt="Icono de precio" />
            <span className="px-2">99.99</span>
          </p>
          <p className="text-gray-700 mb-2 text-base flex">
            <img src="/IconLocation.svg" alt="Icono de ubicación" />
            <span className="px-2">City, Country</span>
          </p>
          <div className="flex justify-between">
            <p className="text-gray-700 text-base flex">
              <img src="/IconCalendar.svg" alt="Icono de calendario" />
              <span className="px-2">01/01/2023</span>
            </p>
            <p className="text-gray-700 text-base flex">
              <img src="/IconClock.svg" alt="Icono de reloj" />
              <span className="px-2">10:00 AM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
