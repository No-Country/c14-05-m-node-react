import { useState } from "react";

function HandleNumTicket({amount, setAmount}) {

  return (
    <div className="rounded-[14px] border border-primary p-4 w-[20.5rem] h-[6rem] flex justify-between items-center">
      <div className="">
        <h3 className="text-dark font-semibold tracking-wide not-italic leading-6">Entrada General</h3>
        <p className="text-grayB font-medium text-xs">Incluye una consumición</p>
        <div className="flex items-center mt-3">
          $
          <div className="font-medium text-xs ml-1">500</div>
        </div>
      </div>
      <div className="flex space-x-2">
        <button onClick={()=>setAmount(amount>0?amount-1:0)}>
            <img src="/IconSubtraction.svg" alt="iconno de restar"/>
        </button>
        <span>{amount}</span>
        <button onClick={()=>setAmount(amount+1)}><img src="/IconAdd.svg" alt="Icono de sumar" /></button>
      </div>
    </div>
  );
}

export default HandleNumTicket;
