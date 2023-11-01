
function InputSearch({searchedEvent,onChangeHandler}) {
  const inputStyles = `border border-dark pl-[44px] rounded-[14px] outline-none focus:border-accent active:border-accent w-full`;


  return (
    <div className={window.innerWidth <= 768?'relative h-12 p-[12px]':'relative h-[1.875rem] '}>
      <img
        src="/IconSearch.svg"
        alt="Icono de buscar"
        className={window.innerWidth <= 768?"absolute left-3 top-3":"absolute left-[14px] top-[1px]"}
      />
      <input
        type="search"
        className={inputStyles}
        placeholder="Buscar evento"
        value={searchedEvent}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default InputSearch;
