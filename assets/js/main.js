import { Digimon } from "./src/model/Digimon.js"
import { Components } from "./src/components/Components.js"
import { Render } from "./src/render/Render.js"
import { digimonGenerator, handleButtonClick } from "./src/util/digimonGenerator.js"


//const digimonContainer = document.querySelector('#all-digimon')

const inputDigimon = document.querySelector("#input-digimon")
const buttonSearchDigimon = document.querySelector('#search-digimon')
const oneDigimonContainer = document.querySelector('#one-digimon')

const genButton1 = document.querySelector('#button-gen-1')
const genButton2 = document.querySelector('#button-gen-2')
const genButton3 = document.querySelector('#button-gen-3')

const genContainer1 = document.querySelector('#gen1-container')
const genContainer2 = document.querySelector('#gen2-container')
const genContainer3 = document.querySelector('#gen3-container')

const gen1to10 = digimonGenerator(1, 10)
const gen11to20 = digimonGenerator(11, 20)
const gen21to30 = digimonGenerator(21, 30)

//Render.allDigimon(digimonContainer)

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

genButton1.addEventListener('click', async() => await handleButtonClick(gen1to10, genContainer1))
genButton2.addEventListener('click', async() => await handleButtonClick(gen11to20, genContainer2))
genButton3.addEventListener('click', async() => await handleButtonClick(gen21to30, genContainer3))
