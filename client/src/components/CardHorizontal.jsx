function CardHorizontal({img, title, date, hour, place, price}) {
  return (
    <div className="flex w-[20.5rem] h-[6.5625rem] px-[0.5rem] py-[0.4375rem] space-x-4 rounded-3xl shadow ">
        <img src={img} alt="Imagen del evento" className="w-[5.8125rem] h-[5.8125rem] object-cover rounded-3xl"/>
        <div className="w-[12.1875rem]">
            <h3 className="text-primary font-semibold">{title}</h3>
            <div className="text-xs">
                <div className="flex justify-between">
                    <div className="flex">
                        <img src="/IconCalendar.svg" alt="Icono de calendario" className="w-4 h-4" />
                        <span className="ml-2">{date}</span>
                    </div>
                    <div className="flex">
                        <img src="/IconClock.svg" alt="Icono reloj" className="w-4 h-4"/>
                        <span className="ml-2">{hour}</span>
                    </div>
                </div>
                <div className="flex">
                    <img src="/IconLocation.svg" alt="Icono de ubicación" className="w-4 h-4"/>
                    <span className="ml-2">{place}</span>
                </div>
                <div className="flex justify-between">
                    <div className="flex">
                        <img src="/IconPrice.svg" alt="Icono de precio" className="w-4 h-4" />
                        <span className="ml-2">{price}</span>
                    </div>
                    <img src="/IconFavorite.svg" alt="Icono de me gusta" className="w-4 h-4"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardHorizontal