import React from "react";

const LabelAuth = ({ htmlFor, error }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-left text-sm pb-2 pl-2  mb-4 ${
        error ? "text-error" : ""
      }`}
    >
      {error ? error : ""}
    </label>
  );
};

export default LabelAuth;
