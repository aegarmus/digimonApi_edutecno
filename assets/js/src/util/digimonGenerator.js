import { Components } from "../components/Components.js"
import { Digimon } from "../model/Digimon.js"
import { Render } from "../render/Render.js"


export function* digimonGenerator(idMin, idMax) {
    let id = idMin
    while(id <= idMax) {
        yield id
        id++
    }
} // => Devuelve un objeto { value: el valor que retorna, done: true, next() }

export const handleButtonClick = async(generador, contenedor) => {
    const { value: digimonId , done } = generador.next()
    if(!done) {
        const digimon = await Digimon.createDigimon(digimonId)
        console.log(digimon)
        const cardDigimon = Components.cardDigimon(digimon)
        Render.allCardDigimon(contenedor, cardDigimon)
    } else {
        alert('No hay más digimon en este rango de busqueda')
    }
}