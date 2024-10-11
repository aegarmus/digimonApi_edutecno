import { fetchAllDigimon } from "../services/fetchDigimon.js";
import { Components } from "../components/Components.js";

export class Render {
  static allCardDigimon(contenedor, cardDigimon) {
    contenedor.innerHTML += cardDigimon;
  }

  static oneCardDigimon = (contenedor, cardDigimon) => {
    contenedor.innerHTML = cardDigimon;
  };

  static async allDigimon(digimonContainer) {
  const allDigimon = await fetchAllDigimon();
  const digimonList = await allDigimon.content;

  digimonList.forEach((digimon) => {
    const cardDigimonToRender = Components.cardDigimon(digimon);
    this.allCardDigimon(digimonContainer, cardDigimonToRender);
  })};
}