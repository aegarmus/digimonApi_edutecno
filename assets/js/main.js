import { Digimon } from "./src/model/Digimon.js"
import { fetchAllDigimon } from "./src/services/fetchDigimon.js"



const digimonContainer = document.querySelector('#all-digimon')

const inputDigimon = document.querySelector("#input-digimon")
const buttonSearchDigimon = document.querySelector('#search-digimon')
const oneDigimonContainer = document.querySelector('#one-digimon')


const createOneCardDigimon = (digimon) => {
    return `
    <div class="card">
        <div class="card__header">
            <img src="${digimon.image}" alt="${digimon.name}" />
            <h2>${digimon.name}</h2>
        </div>
        <div class="card__body">
            <ul>
                <li>Level: ${digimon.level[0]}</li>
                ${
                    digimon.attributes.forEach((attribute) => {
                        return `<li>${attribute}</li>`;
                })}
                ${
                    digimon.types.forEach((type) => {
                        return `<li>${type}</li>`;
                })}
                ${
                    digimon.fields.forEach((field) => {
                        return `<li>
                                    <div>
                                        <p>${field.field}</p>
                                        <img src="${field.image}" alt="imagen de ${field.field} />
                                    </div>
                                </li>`
                    })
                }
            </ul>
            <p>${digimon.description.description}</p>
            <p>Año de lanzamiento: ${digimon.release}
        </div>
    </div>
    `;
}


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

buttonSearchDigimon.addEventListener('click', async() => {
    try {
        const digimonSearched = inputDigimon.value
    
        if(!digimonSearched) throw new Error('Debes ingresar un ID o nombre valido')
        
        const digimonData = await Digimon.createDigimon(digimonSearched)
        const cardDigimon = createOneCardDigimon(digimonData)
    
        renderCardDigimon(oneDigimonContainer, cardDigimon)
        
    } catch (error) {
        console.error('No pudimos cargar el digimon en la vista', error)
        alert(`No pudimos cargar el digimon en la vista
            Error: ${error}`);     
    }   
})