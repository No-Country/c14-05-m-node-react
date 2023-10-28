import { useLocation } from "react-router-dom";
import BackPage from "../../components/BackPage"
import Title1 from "../../components/Title1"
import Title2 from "../../components/Title2"

function ReserveTicket({}) {
    const { state } = useLocation();
    console.log(state)
  return (
    <div className="space-y-4 mb-4">
        {/* header */}
        <div className="flex justify-between mt-4">
            <BackPage/>
            <img src="/IconFavorite.svg" alt="Icono de me gusta" />
        </div>
        {/* main image */}
        <div className="-mx-4">
            <img src={state.image} alt="Imagen del evento"/>
        </div>

        {/* Data event */}
        <div className="space-y-4">
            <Title1 title={state.titulo}></Title1>
            <div className="flex justify-between">
                <span>Organizado por <span className="text-accent">{state.userId}</span></span>
                <button className="border rounded-2xl px-5 py-1 border-secondary text-primary text-xs">Seguir</button>
            </div>
            <div className="bg-secondary p-4 space-y-2 rounded-2xl">
                <div className="flex space-x-2 items-center">
                    <img src="/reserveTicket/IconLocation.svg" alt="Icono de ubicación" className="" />
                    <p>{state.ubicacion}</p>
                </div>
                <div className="flex space-x-16">
                    <div className="flex space-x-2 items-center">
                        <img src="/reserveTicket/IconCalendar.svg" alt="Icono de calendario" className="" />
                        <p>{state.fecha}</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <img src="/reserveTicket/IconClock.svg" alt="Icono de hora" className="" />
                        <p>{state.hora}</p>
                    </div>
                </div>
                <div className="flex space-x-2 items-center">
                    <img src="/reserveTicket/IconPrice.svg" alt="Icono de precio" className="" />
                    <p>{state.costo}</p>
                </div>
            </div>
        </div>
        <section>
            <Title2 title={"Información"}/>
            <p>{state.descripcion}</p>
        </section>
        <button
              className="btn-primary rounded-[15px] p-4 w-full"
              type="submit"
            >Reservar entrada</button>
    </div>
  )
}

export default ReserveTicket