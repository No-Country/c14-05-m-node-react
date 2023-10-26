import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { categoriasList } from "../../utils/Categorias";

function Preferencias({}) {
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  const navigate = useNavigate();

  useEffect(() => {
    changeBgColor("#CBDEF4");
    return () => {
      changeBgColor("#FFFF");
    };
  }, []);

  const changeBgColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  function handleCategoryClick(categoryName) {
    if (selectedCategories.has(categoryName)) {
      selectedCategories.delete(categoryName);
    } else {
      selectedCategories.add(categoryName);
    }
    setSelectedCategories(new Set(selectedCategories)); // esto es para que sea un set distinto y que haga re-render
  }

  function handleClickBtnCategories() {
    console.log(selectedCategories);
    navigate("/");
    //aca iria un post al servidor con las preferencias seleccionadas
  }

  return (
    <div className=" bg-secondary pt-14 font-nunito text-gray-900">
      <h1 className="text-left text-xl font-semibold not-italic leading-8 tracking-[0.15px] text-black">
        Seleccioná tus preferencias
      </h1>
      <h2 className="mb-6 mt-2 text-sm font-normal not-italic leading-4 tracking-[0.25px] text-black">
        Elegí tres o más preferencias para que mostremos los mejores eventos
        para vos.
      </h2>
      <div className="items flex flex-row flex-wrap  items-center gap-2">
        {categoriasList.map((icon) => {
          return (
            <div
              key={icon.name}
              onClick={() => handleCategoryClick(icon.name)}
              className={` flex max-w-fit cursor-pointer items-center justify-center gap-2 rounded-2xl border border-primary bg-center px-3 py-1 ${
                selectedCategories.has(icon.name)
                  ? "bg-primary  text-secondary"
                  : " bg-secondary text-primary"
              }`}
            >
              {React.cloneElement(icon.svg, {
                className: selectedCategories.has(icon.name)
                  ? "fill-secondary"
                  : "fill-primary",
              })}
              <p className="">{icon.name}</p>
            </div>
          );
        })}

        <div className="mt-40 flex w-full items-center justify-center">
          <button
            onClick={handleClickBtnCategories}
            className={` btn-wide  h-12  rounded-[15px] ${
              selectedCategories.size >= 3
                ? "btn-primary text-white"
                : "btn-disabled bg-grayC text-grayB"
            } `}
          >
            <h1 className="text-center text-sm ">Aceptar</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Preferencias;
