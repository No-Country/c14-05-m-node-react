import { maskitoTimeOptionsGenerator } from "@maskito/kit";
import { useMaskito } from "@maskito/react";
import React, { useState } from "react";
import options from "../utils/DateMask";

const DateInput = ({ saveDate }) => {
  const maskedInputRef = useMaskito({ options });
  function handleChange(e) {
    saveDate(e.target.value);
  }
  return (
    <input
      className="flex w-[156px] items-center gap-2 rounded-[15px] border border-solid border-dark p-4 text-base font-normal not-italic leading-4 tracking-[0.1px] text-dark outline-none focus:border-accent active:border-accent  lg:w-full lg:text-lg"
      ref={maskedInputRef}
      placeholder="Fecha"
      onBlur={handleChange}
    />
  );
};

export default DateInput;
