import { useState } from "react";
import Title1 from "../../components/Title1"

function index() {
    const [isActive, setIsActive] = useState(true);
  return (
    <div>
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
    </div>
  )
}

export default index