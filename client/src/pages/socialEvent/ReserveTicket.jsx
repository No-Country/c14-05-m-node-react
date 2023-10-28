import BackPage from "../../components/BackPage"
import Title1 from "../../components/Title1"
import Title2 from "../../components/Title2"

function ReserveTicket() {

  return (
    <div className="space-y-4">
        <div className="flex justify-between">
            <BackPage/>
            <img src="/IconFavorite.svg" alt="Icono de me gusta" />
        </div>
        <img src="/ImageCard.svg" alt="Imagen del evento" className="w-full" />
        <div className="">
            <Title1 title={"Title 1"}></Title1>
            <div className="flex justify-between">
                <span>Organizado por <span className="text-accent">Nombre empresa</span></span>
                <button className="border rounded-2xl px-5 py-1 border-secondary text-primary text-xs">Seguir</button>
            </div>
            <div className="bg-secondary p-4 space-y-2 rounded-2xl">
                <div className="flex space-x-2 items-center">
                    <img src="/reserveTicket/IconLocation.svg" alt="Icono de ubicación" className="" />
                    <p>Dirección</p>
                </div>
                <div className="flex space-x-20">
                    <div className="flex space-x-2 items-center">
                        <img src="/reserveTicket/IconCalendar.svg" alt="Icono de ubicación" className="" />
                        <p>Dirección</p>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <img src="/reserveTicket/IconClock.svg" alt="Icono de ubicación" className="" />
                        <p>Dirección</p>
                    </div>
                </div>
                <div className="flex space-x-2 items-center">
                    <img src="/reserveTicket/IconPrice.svg" alt="Icono de ubicación" className="" />
                    <p>Dirección</p>
                </div>
            </div>
        </div>
        <section>
            <Title2 title={"Información"}/>
            <p>Descripción</p>
        </section>
        <button
              className="btn-primary rounded-[15px] p-4 w-full"
              type="submit"
            >Reservar entrada</button>
    </div>
  )
}

export default ReserveTicket