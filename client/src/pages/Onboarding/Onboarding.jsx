import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const navigate = useNavigate();

  function navigateToPreferencias() {
    navigate("/preferencias");
  }

  function changeSlide() {
    if (currentSlide == 3) {
      navigateToPreferencias();
      return;
    }
    setCurrentSlide(currentSlide + 1);
  }
  console.log(currentSlide);

  return (
    <div className=" bg-secondary h-screen w-screen ">
      <div className="pt-40 flex items-center justify-center flex-col font-nunito text-dark  gap-10 ">
        <div className="carousel w-64  ">
          <div id="item1" className="carousel-item w-full flex flex-col">
            <img src="/onboarding/onboarding1.png" className="w-full" />
            <h1 className="text-center text-xl ">
              Encontrá tus eventos favoritos
            </h1>
          </div>
          <div id="item2" className="carousel-item w-full flex flex-col ">
            <img src="/onboarding/onboarding2.png" className="w-full" />
            <h1 className="text-center text-xl ">
              Comprá tus entradas desde tu casa
            </h1>
          </div>
          <div id="item3" className="carousel-item w-full flex flex-col ">
            <img src="/onboarding/onboarding3.png" className="w-full" />
            <h1 className="text-center text-xl ">Creá tus propios eventos</h1>
          </div>
        </div>
        <div className="flex justify-center items-center w-full py-2 gap-2">
          <a
            href="#item1"
            className={`w-3 h-3 rounded-full ${
              currentSlide == 1 ? "bg-primary" : "bg-base-100"
            } `}
            onClick={() => setCurrentSlide(1)}
          ></a>
          <a
            href="#item2"
            className={`w-3 h-3 rounded-full ${
              currentSlide == 2 ? "bg-primary" : "bg-base-100"
            } `}
            onClick={() => setCurrentSlide(2)}
          ></a>
          <a
            href="#item3"
            className={`w-3 h-3 rounded-full ${
              currentSlide == 3 ? "bg-primary" : "bg-base-100"
            } `}
            onClick={() => setCurrentSlide(3)}
          ></a>
        </div>

        <div className="flex flex-col gap-2">
          <a
            href={`#item${currentSlide}`}
            onClick={changeSlide}
            className="btn-primary btn-wide rounded-[15px] h-12 flex justify-center items-center"
          >
            <h1 className="text-center text-sm text-white">Siguiente</h1>
          </a>

          <button
            className="btn-secondary btn-wide rounded-[15px] h-12  flex justify-center items-center"
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
