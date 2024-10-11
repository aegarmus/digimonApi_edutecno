const BASE_URL = "https://digi-api.com/api/v1";

export const fetchAllDigimon = async() => {
    try {
        const response = await fetch(`${BASE_URL}/digimon`)
        if(!response.ok) throw new Error('Error al traer a los Digimon')
        const data = await response.json()
    
        return(data)
        
    } catch (error) {
        console.error(error)
    }
}


export const fetchOneDigimon = async(digimon) => {
    try {
        const response = await fetch(`${BASE_URL}/digimon/${digimon}`);
        if(!response.ok) throw new Error(`Error al encontrar el digimon ${digimon}`)
        const data = await response.json()

        return data
    
    } catch (error) {
        console.error(error)
    }
}

