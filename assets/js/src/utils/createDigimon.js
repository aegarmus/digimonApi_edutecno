import { Digimon } from "../model/Digimon.js";
import { fetchOneDigimon } from "../services/fetchDigimon.js";

export const createDigimon = async(digimonSearched) => {
    try {
        const digimon = await fetchOneDigimon(digimonSearched)
    
        const {
          name,
          images,
          levels,
          types,
          attributes,
          fields,
          descriptions,
          releaseDate,
        } = digimon;
    
        const imageNormalize = images[0].href;
        const levelNormalize = levels.map((level) => level.level);
        const typesNormalizer = types.map((type) => type.type); //['reptile', 'beast']
        const attributesNormalize = attributes.map(
          (attribute) => attribute.attribute
        );
        const fieldNormalize = fields.map((field) => ({
          field: field.field,
          image: field.image,
        }));
        const descriptionNormalize = descriptions.find(
          (description) => description.language === "en_us"
        );
    
        const newDigimon = new Digimon(
          name,
          imageNormalize,
          levelNormalize,
          typesNormalizer,
          attributesNormalize,
          fieldNormalize,
          descriptionNormalize,
          releaseDate
        );
    
        return newDigimon
        
    } catch (error) {
        console.error(error)
    }
}


