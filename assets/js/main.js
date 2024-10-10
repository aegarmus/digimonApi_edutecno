import { fetchAllDigimon } from "./src/services/fetchDigimon.js"


const digimonContainer = document.querySelector('#all-digimon')

const createCardDigimon = (digimon) => {
    return `
    <div class="card">
        <div class="card__header">
            <img src="${digimon.image}" alt="foto de ${digimon.name}" />
        </div>
        <div class="card__body">
            <h2>${digimon.name}</h2>
            <p>N° ${digimon.id}</p>
        </div>
    </div
    `
}

const renderCardDigimon = (contenedor, cardDigimon) => {
    contenedor.innerHTML += cardDigimon
}

const renderAllDigimon = async() => {
    const allDigimon = await fetchAllDigimon()
    const digimonList = await allDigimon.content

    digimonList.forEach(digimon => {
        const cardDigimon = createCardDigimon(digimon)
        renderCardDigimon(digimonContainer, cardDigimon)
    })
}

renderAllDigimon()