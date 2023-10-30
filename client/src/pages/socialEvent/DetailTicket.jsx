import { useLocation, useNavigate } from "react-router-dom";
import BackPage from "../../components/BackPage";
import Title1 from "../../components/Title1";
import HandleNumTicket from "../../components/HandleNumTicket";
import { useState } from "react";

function DetailTicket() {
  const { state } = useLocation();
  let navigate = useNavigate();
  const [amount, setAmount] = useState(0)
  state.amount = amount
  return (
    <div className="my-4 space-y-4">
      <BackPage WhereBack={"Seleccioner Entradas"} />
      {/* main image */}
      <div className="-mx-4">
        <img src={state.image} alt="Imagen del evento" />
      </div>
      <Title1 title={state.titulo}></Title1>
      <HandleNumTicket amount={amount} setAmount={setAmount}/>
      <HandleNumTicket />
      <hr className="border border-grayD" />
      <div className="flex justify-between">
        <div>Subtotal</div>
        <div className="flex items-center mt-3">
          <div className="font-normal">$500</div>
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
  );
}

export default DetailTicket;
