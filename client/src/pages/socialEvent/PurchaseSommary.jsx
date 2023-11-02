import { useLocation, useNavigate } from "react-router-dom";
import BackPage from "../../components/BackPage";
import CardHorizontal2 from "../../components/CardHorizontal2";
import Title2 from "../../components/Title2";
import Info from "../../components/Info";
import NavbarDesktopSinSearcher from "../../components/NavbarDesktopSinSearcher";

function PurchaseSommary() {
  const { state } = useLocation();
  let navigate = useNavigate();

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
        <div className="my-4">
          <div className="md:hidden">
            <BackPage />
          </div>
          <Title2 title={"Resumen de compra"} />
          <CardHorizontal2
            img={state.image}
            title={state.titulo}
            date={state.fecha}
            hour={state.hora}
          />
          <div className="mt-4 flex items-center justify-between">
            <div className="flex space-x-2">
              <div>x{state.amount}</div>
              <p>Entradas generales</p>
            </div>
            <div className="mt-3 flex items-center">
              <div className="font-normal">${state.costo * state.amount}</div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex space-x-2">
              <div>x{state.amountPro}</div>
              <p>Entradas Pro</p>
            </div>
            <div className="mt-3 flex items-center">
              <div className="font-normal">
                ${state.costo * state.amountPro}
              </div>
            </div>
          </div>
          <div className="fixed bottom-4">
            <Info />
            <hr className="mt-8 border border-grayD" />
            <div className="mb-8 flex items-center justify-between">
              <div>Subtotal</div>
              <div className="mt-3 flex items-center">
                <div className="font-normal">
                  ${state.costo * state.amount + state.costo * state.amountPro}
                </div>
              </div>
            </div>

            <button
              className="btn-primary w-full rounded-[15px] p-4"
              type="button"
              onClick={() => navigate("/reserva-finalizada", { state: state })}
            >
              Reservar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PurchaseSommary;
