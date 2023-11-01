import { useLocation, useNavigate } from "react-router-dom";
import BackPage from "../../components/BackPage";
import Title1 from "../../components/Title1";
import HandleNumTicket from "../../components/HandleNumTicket";
import HandleNumTicketPro from "../../components/HandleNumTicketPro";
import { useState } from "react";
import NavbarDesktopSinSearcher from "../../components/NavbarDesktopSinSearcher";

function DetailTicket() {
  const { state } = useLocation();
  let navigate = useNavigate();
  const [amount, setAmount] = useState(0);
  const [amountPro, setAmountPro] = useState(0);
  state.amount = amount;
  state.amountPro = amountPro;
  return (
    <>
      <NavbarDesktopSinSearcher />
      <div
        className={
          window.innerWidth <= 768
            ? "flex flex-col items-center"
            : "my-[74px] flex flex-col items-center"
        }
      >
        <div className="my-4 space-y-4 w md:w-1/2 xl:w-1/3">
          <div className="md:hidden">
            <BackPage WhereBack={"Seleccioner Entradas"} />
          </div>

          {/* main image */}
          <div className="-mx-4">
            <img
              src={state.image}
              alt="Imagen del evento"
              className="h-auto w-full object-cover"
            />
          </div>
          <Title1 title={state.titulo}></Title1>
          <HandleNumTicket
            amount={amount}
            setAmount={setAmount}
            price={state.costo}
          />
          <HandleNumTicketPro
            amountPro={amountPro}
            setAmountPro={setAmountPro}
            price={state.costo}
          />
          <hr className="border border-grayD" />
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div className="mt-3 flex items-center">
              <div className="font-normal">
                ${state.costo * amount + state.costo * amountPro}
              </div>
            </div>
          </div>
          <button
            className="btn-primary w-full rounded-[15px] p-4"
            type="button"
            onClick={() => navigate("/resumen-compra", { state: state })}
          >
            Aceptar
          </button>
        </div>
      </div>
    </>
  );
}

export default DetailTicket;
