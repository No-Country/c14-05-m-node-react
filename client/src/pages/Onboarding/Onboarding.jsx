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
    <div className=" flex  justify-center bg-secondary ">
      <div className="container flex flex-col items-center justify-center gap-10 font-nunito  text-dark sm:max-w-xs xl:mt-[40px] xl:max-w-lg ">
        <div className="carousel  ">
          <div id="item1" className="carousel-item flex w-full flex-col">
            <img src="/onboarding/onboarding1.png" className="w-full" />
            <h1 className="text-center text-xl xl:text-3xl 2xl:text-4xl">
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

        <div className="flex flex-col gap-2 xl:pb-4">
          <a
            href={`#item${currentSlide}`}
            onClick={changeSlide}
            className="btn-primary btn-wide flex h-12 items-center justify-center rounded-[15px] xl:rounded-none 2xl:h-16 2xl:w-72 "
          >
            <h1 className="text-center text-sm text-white xl:text-base">
              Siguiente
            </h1>
          </a>

          <button
            className="btn-secondary btn-wide flex h-12  items-center justify-center rounded-[15px] xl:rounded-none 2xl:h-16 2xl:w-72  "
            onClick={navigateToPreferencias}
          >
            <h1 className="text-center text-sm text-primary xl:text-base">
              Omitir
            </h1>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Onboarding;
