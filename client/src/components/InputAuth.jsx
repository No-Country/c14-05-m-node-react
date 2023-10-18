const InputAuth = ({ name, error, ...rest }) => {
  const inputStyles = `border border-dark p-[10px] pl-4  pr-10 rounded-[14px] h-12 outline-none focus:border-accent active:border-accent mb-4 ${
    error ? "border-error bg-[#FFE8E8]" : "border-dark"
  }`;
  return <input type="text" name={name} className={inputStyles} {...rest} />;
};

export default InputAuth;
