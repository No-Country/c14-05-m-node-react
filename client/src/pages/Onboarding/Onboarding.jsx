import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigate = useNavigate();

  function navigateToPreferencias() {
    navigate("/preferencias");
  }

  useEffect(() => {
    changeBgColor("#CBDEF4");
    return () => {
      changeBgColor("#FFFF");
    };
  }, []);

  const changeBgColor = (color) => {
    document.body.style.backgroundColor = color;
  };

  function changeSlide() {
    if (currentSlide == 3) {
      navigateToPreferencias();
      return;
    }
    setCurrentSlide(currentSlide + 1);
  }
  console.log(currentSlide);

  return (
    <div className=" bg-secondary ">
      <div className="flex flex-col items-center justify-center gap-10 pt-40 font-nunito  text-dark ">
        <div className="carousel w-64  ">
          <div id="item1" className="carousel-item flex w-full flex-col">
            <img src="/onboarding/onboarding1.png" className="w-full" />
            <h1 className="text-center text-xl ">
              Encontrá tus eventos favoritos
            </h1>
          </div>
          <div id="item2" className="carousel-item flex w-full flex-col ">
            <img src="/onboarding/onboarding2.png" className="w-full" />
            <h1 className="text-center text-xl ">
              Comprá tus entradas desde tu casa
            </h1>
          </div>
          <div id="item3" className="carousel-item flex w-full flex-col ">
            <img src="/onboarding/onboarding3.png" className="w-full" />
            <h1 className="text-center text-xl ">Creá tus propios eventos</h1>
          </div>
        </div>
        <div className="flex w-full items-center justify-center gap-2 py-2">
          <a
            href="#item1"
            className={`h-3 w-3 rounded-full ${
              currentSlide == 1 ? "bg-primary" : "bg-base-100"
            } `}
            onClick={() => setCurrentSlide(1)}
          ></a>
          <a
            href="#item2"
            className={`h-3 w-3 rounded-full ${
              currentSlide == 2 ? "bg-primary" : "bg-base-100"
            } `}
            onClick={() => setCurrentSlide(2)}
          ></a>
          <a
            href="#item3"
            className={`h-3 w-3 rounded-full ${
              currentSlide == 3 ? "bg-primary" : "bg-base-100"
            } `}
            onClick={() => setCurrentSlide(3)}
          ></a>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={`#item${currentSlide}`}
            onClick={changeSlide}
            className="btn-primary btn-wide flex h-12 items-center justify-center rounded-[15px]"
          >
            <h1 className="text-center text-sm text-white">Siguiente</h1>
          </a>

          <button
            className="btn-secondary btn-wide flex h-12  items-center justify-center rounded-[15px]"
            onClick={navigateToPreferencias}
          >
            <h1 className="text-center text-sm text-primary">Omitir</h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
