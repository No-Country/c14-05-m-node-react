function CardHorizontal({img, title, date, hour}) {
  return (
    <div className="flex space-x-4 items-center ">
        <img src={img} alt="Imagen del evento" className="w-[4.375rem] h-[4.375rem] object-cover"/>
        <div className="w-[12.1875rem] space-y-3">
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

            </div>
        </div>
    </div>
  )
}

export default CardHorizontal