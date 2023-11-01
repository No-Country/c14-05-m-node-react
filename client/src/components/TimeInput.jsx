import { useMaskito } from "@maskito/react";
import React from "react";
import options from "../utils/timeMask";

export default function TimeInput({ saveTime }) {
  const ref = useMaskito({ options });

  function handleChange(e) {
    saveTime(e.target.value);
  }
  return (
    <input
      ref={ref}
      className="flex w-[156px] items-center gap-2 rounded-[15px] border border-solid border-dark p-4 text-base font-normal not-italic leading-4 tracking-[0.1px] text-dark outline-none focus:border-accent active:border-accent lg:w-full lg:text-lg"
      placeholder="Hora"
      onBlur={handleChange}
    />
  );
}
