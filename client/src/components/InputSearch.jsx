
function InputSearch({searchedEvent,onChangeHandler}) {
  const inputStyles = `border border-dark p-[12px] pl-[44px] rounded-[14px] h-12 outline-none focus:border-accent active:border-accent w-full`;


  return (
    <div className="relative">
      <img
        src="/IconSearch.svg"
        alt="Icono de buscar"
        className="absolute left-3 top-3"
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
