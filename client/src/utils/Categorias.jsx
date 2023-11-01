import React from "react";
import ArteIcon from "./iconosPreferencia/arte.svg?react";
import BaresIcon from "./iconosPreferencia/bares.svg?react";
import CienciaIcon from "./iconosPreferencia/ciencia.svg?react";
import ComidaIcon from "./iconosPreferencia/comidas.svg?react";
import ConciertoIcon from "./iconosPreferencia/conciertos.svg?react";
import CulturalIcon from "./iconosPreferencia/cultural.svg?react";
import DeporteIcon from "./iconosPreferencia/deporte.svg?react";
import EcologicoIcon from "./iconosPreferencia/ecologico.svg?react";
import FiestaIcon from "./iconosPreferencia/fiestas.svg?react";
import InfantilesIcon from "./iconosPreferencia/infantiles.svg?react";
import MusicaIcon from "./iconosPreferencia/musica.svg?react";
import SaludIcon from "./iconosPreferencia/salud.svg?react";
import StandUpIcon from "./iconosPreferencia/stand-up.svg?react";
import TeatroIcon from "./iconosPreferencia/teatro.svg?react";
import TecnologiaIcon from "./iconosPreferencia/tecnologia.svg?react";

export const categoriasList = [
  { name: "Musica", svg: <MusicaIcon /> },
  { name: "Artes", svg: <ArteIcon /> },
  { name: "Bares", svg: <BaresIcon /> },
  { name: "Ciencia", svg: <CienciaIcon /> },
  { name: "Comidas", svg: <ComidaIcon /> },
  { name: "Conciertos", svg: <ConciertoIcon /> },
  { name: "Cultural", svg: <CulturalIcon /> },
  { name: "Deporte", svg: <DeporteIcon /> },
  { name: "Ecologico", svg: <EcologicoIcon /> },
  { name: "Fiestas", svg: <FiestaIcon /> },
  { name: "Infantiles", svg: <InfantilesIcon /> },
  { name: "Salud", svg: <SaludIcon /> },
  { name: "Stand Up", svg: <StandUpIcon /> },
  { name: "Teatro", svg: <TeatroIcon /> },
  { name: "Tecnologia", svg: <TecnologiaIcon /> },
];

export const optionList = [
  { value: "Musica", label: "Musica", icon: <MusicaIcon /> },
  { value: "Artes", label: "Artes", icon: <ArteIcon /> },
  { value: "Bares", label: "Bares", icon: <BaresIcon /> },
  {
    value: "Ciencia",
    label: "Ciencia",
    icon: <CienciaIcon />,
  },
  {
    value: "Comidas",
    label: "Comidas",
    icon: <ComidaIcon />,
  },
  {
    value: "Conciertos",
    label: "Conciertos",
    icon: <ConciertoIcon />,
  },
  { value: "Cultural", label: "Cultural", icon: <CulturalIcon /> },
  { value: "Deporte", label: "Deporte", icon: <DeporteIcon /> },
  { value: "Ecologico", label: "Ecologico", icon: <EcologicoIcon /> },
  { value: "Fiestas", label: "Fiestas", icon: <FiestaIcon /> },
  { value: "Infantiles", label: "Infantiles", icon: <InfantilesIcon /> },
  { value: "Salud", label: "Salud", icon: <SaludIcon /> },
  { value: "Stand Up", label: "Stand Up", icon: <StandUpIcon /> },
  { value: "Teatro", label: "Teatro", icon: <TeatroIcon /> },
  { value: "Tecnologia", label: "Tecnologia", icon: <TecnologiaIcon /> },
];

function Categorias() {
  return <></>;
}

export default Categorias;
