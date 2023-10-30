import { useNavigate } from "react-router-dom";

function ReservationFinalized() {
    let navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img
          src="/Finalized.png"
          alt="imagen de proceso finalizado"
          className="h-[16.125rem] w-[16.125rem]"
        />
        <h1 className="text-[1.5rem] text-center">
        ¡El evento fue reservado con éxito!
        </h1>
        <p className="text-center text-[14px] my-8">
          Recordá que podes pagar tu entrada en ventanilla hasta antes de
          ingresar al evento
        </p>
        <button
          className="btn-primary w-full rounded-[15px] p-4 mb-4"
          type="button"
          onClick={() => navigate("/resumen-compra")}
        >
          Ver reserva
        </button>
        <button
          className="text-primary border border-primary w-full rounded-[15px] p-4"
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
