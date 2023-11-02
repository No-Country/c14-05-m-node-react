import { useState } from "react";
import Title1 from "../../components/Title1";
import NavbarDesktopSinSearcher from "../../components/NavbarDesktopSinSearcher";
import Navbar from "../../components/Navbar";

function index() {
  const [isActive, setIsActive] = useState(true);
  return (
    <div>
      <NavbarDesktopSinSearcher />
      <div className={window.innerWidth <= 768 ? "" : "my-[74px]"}>
        <Title1 title={"Boletos"}></Title1>
        <div className="flex h-8  flex-row gap-4 text-sm ">
          <div
            className={` duration-250 flex w-1/2 cursor-pointer items-center justify-center border-b-2 text-sm   font-semibold not-italic leading-4 tracking-[0.25px] text-primary transition  ${
              isActive ? " border-b-primary" : "border-white"
            } `}
            onClick={() => setIsActive(!isActive)}
          >
            <h2>Próximos</h2>
          </div>
          <div
            className={` duration-250 flex w-1/2 cursor-pointer items-center justify-center border-b-2 text-sm   font-semibold not-italic leading-4 tracking-[0.25px] text-primary transition ${
              isActive ? "border-white" : " border-b-primary"
            } `}
            onClick={() => setIsActive(!isActive)}
          >
            <h2>Finalizados</h2>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/ImageTickets.png"
              alt="imagen de proceso finalizado"
              className="h-[16.125rem] w-[16.125rem]"
            />
            <p className="my-8 text-center text-[14px]">
              No tienes ningún evento próximo.
            </p>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default index;
