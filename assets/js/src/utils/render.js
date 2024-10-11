import { fetchAllDigimon } from "../services/fetchDigimon.js";
import { cardDigimon } from "../components/cardDigimon.js";

export const renderAllCardDigimon = (contenedor, cardDigimon) => {
  contenedor.innerHTML += cardDigimon;
};

export const renderOneCardDigimon = (contenedor, cardDigimon) => {
  contenedor.innerHTML = cardDigimon;
};

export const renderAllDigimon = async (digimonContainer) => {
  const allDigimon = await fetchAllDigimon();
  const digimonList = await allDigimon.content;

  digimonList.forEach((digimon) => {
    const cardDigimonToRender = cardDigimon(digimon);
    renderAllCardDigimon(digimonContainer, cardDigimonToRender);
  });
};
