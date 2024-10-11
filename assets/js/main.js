import { Digimon } from "./src/model/Digimon.js"
import { Components } from "./src/components/Components.js"
import { Render } from "./src/render/Render.js"


const digimonContainer = document.querySelector('#all-digimon')

const inputDigimon = document.querySelector("#input-digimon")
const buttonSearchDigimon = document.querySelector('#search-digimon')
const oneDigimonContainer = document.querySelector('#one-digimon')


Render.allDigimon(digimonContainer);

buttonSearchDigimon.addEventListener('click', async() => {
    try {
        const digimonSearched = inputDigimon.value
    
        if(!digimonSearched) throw new Error('Debes ingresar un ID o nombre valido')
        
        const digimonData = await Digimon.createDigimon(digimonSearched)
        const cardDigimon = Components.oneCardDigimon(digimonData)
    
        Render.oneCardDigimon(oneDigimonContainer, cardDigimon)
        
    } catch (error) {
        console.error('No pudimos cargar el digimon en la vista', error)
        alert(`No pudimos cargar el digimon en la vista
            Error: ${error}`);     
    }   
})