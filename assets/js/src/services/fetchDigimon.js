

export const fetchAllDigimon = async() => {
    try {
        const response = await fetch('https://digi-api.com/api/v1/digimon')
        if(!response.ok) throw new Error('Error al traer a los Digimon')
        const data = await response.json()
    
        return(data)
        
    } catch (error) {
        console.error(error)
    }
}

fetchAllDigimon()