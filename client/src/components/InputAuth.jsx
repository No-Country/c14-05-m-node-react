const InputAuth = ({ name, error, ...rest }) => {
  const inputStyles = `lg:h-14 lg:rounded-[20px] border border-dark pl-4 min-w-full pr-10 rounded-[15px] h-12 outline-none focus:border-accent active:border-accent text-base font-normal not-italic leading-4 tracking-[0.1px] text-dark  ${
    error ? "border-error bg-[#FFE8E8]" : "border-dark"
  }`;
  return <input type="text" name={name} className={inputStyles} {...rest} />;
};

export default InputAuth;
