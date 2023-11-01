import { Link, useLocation, useNavigate } from "react-router-dom";

function ReservationFinalized() {
  let navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="/Finalized.png"
          alt="imagen de proceso finalizado"
          className="h-[16.125rem] w-[16.125rem]"
        />
        <h1 className="text-center text-[1.5rem]">
          ¡El evento fue reservado con éxito!
        </h1>
        <p className="my-8 text-center text-[14px]">
          Recordá que podes pagar tu entrada en ventanilla hasta antes de
          ingresar al evento
        </p>
        {/* <button
          className="btn-primary mb-4 w-full rounded-[15px] p-4"
          type="button"
          onClick={() => navigate("/resumen-compra", { state: state })}
        >
          Ver reserva
        </button> */}

        <button
          className="w-full rounded-[15px] border border-primary p-4 text-primary"
          type="button"
          onClick={() => navigate("/")}
        >
          Ir al inicio
        </button>
      </div>
    </div>
  );
}

export default ReservationFinalized;
