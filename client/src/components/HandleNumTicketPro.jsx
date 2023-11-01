function HandleNumTicketPro({ amountPro, setAmountPro,price }) {
  return (
    <div className="flex h-[6rem] w-[20.5rem] items-center justify-between rounded-[14px] border border-primary p-4">
      <div className="">
        <h3 className="font-semibold not-italic leading-6 tracking-wide text-dark">
          Entrada Pro
        </h3>
        <p className="text-xs font-medium text-grayB">
          Incluye una consumición + kit especial
        </p>
        <div className="mt-3 flex items-center">
          $<div className="ml-1 text-xs font-medium">{price}</div>
        </div>
      </div>
      <div className="flex space-x-2">
        <button onClick={() => setAmountPro(amountPro > 0 ? amountPro - 1 : 0)}>
          <img src="/IconSubtraction.svg" alt="iconno de restar" />
        </button>
        <span>{amountPro}</span>
        <button onClick={() => setAmountPro(amountPro + 1)}>
          <img src="/IconAdd.svg" alt="Icono de sumar" />
        </button>
      </div>
    </div>
  );
}

export default HandleNumTicketPro;
