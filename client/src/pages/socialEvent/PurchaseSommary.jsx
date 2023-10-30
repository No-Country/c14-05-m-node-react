import { useLocation, useNavigate } from "react-router-dom";
import BackPage from "../../components/BackPage";
import CardHorizontal2 from "../../components/CardHorizontal2";
import Title2 from "../../components/Title2";
import Info from "../../components/Info";

function PurchaseSommary() {
  const { state } = useLocation();
  let navigate = useNavigate();
  console.log(state);
  return (
    <div className="my-4">
      <BackPage />
      <Title2 title={"Resumen de compra"} />
      <CardHorizontal2
        img={state.image}
        title={state.titulo}
        date={state.fecha}
        hour={state.hora}
      />
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
            <div>x{state.amount}</div>
            <p>Entradas generales</p>
        </div>
        <div className="mt-3 flex items-center">
          <div className="font-normal">${state.costo*state.amount}</div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex space-x-2">
            <div>x{state.amountPro}</div>
            <p>Entradas Pro</p>
        </div>
        <div className="mt-3 flex items-center">
          <div className="font-normal">${state.costo*state.amountPro}</div>
        </div>
      </div>
      <div className="fixed bottom-4">
      <Info/>
      <hr className="border border-grayD mt-8" />
      <div className="flex justify-between items-center mb-8">
        <div>Subtotal</div>
        <div className="flex items-center mt-3">
          <div className="font-normal">${state.costo*state.amount + state.costo*state.amountPro}</div>
        </div>
      </div>

      <button
        className="btn-primary w-full rounded-[15px] p-4"
        type="button"
        onClick={() => navigate("/reserva-finalizada")}
      >
        Reservar
      </button>
      </div>

    </div>
  );
}

export default PurchaseSommary;
