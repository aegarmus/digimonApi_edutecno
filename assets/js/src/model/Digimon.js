import { fetchOneDigimon } from "../services/fetchDigimon.js"

export class Digimon {
    #id
    #name
    #image
    #level
    #types
    #attributes
    #fields
    #description
    #realease

    constructor(
        id,
        name,
        image,
        level,
        types,
        attributes,
        fields,
        description,
        release
    ) {
        this.#id = id
        this.#name = name
        this.#image = image
        this.#level = level
        this.#types = types
        this.#attributes = attributes
        this.#fields = fields
        this.#description = description
        this.#realease = release
    }
    
    get id() {
      return this.#id
    }

    get name() {
        return this.#name
    }

    get image() {
        return this.#image
    }

    get level() {
        return this.#level
    }

    get types() {
        return this.#types
    }

    get attributes() {
        return this.#attributes
    }

    get fields() {
        return this.#fields
    }

    get description() {
        return this.#description
    }

    get release() {
        return this.#realease
    }

    getAllProperties() {
        return {
            name: this.#name,
            image: this.#image,
            level: this.#level,
            types: this.#types,
            attributes: this.#attributes,
            fields: this.#fields,
            description: this.#description,
            release: this.#realease
        }
    }

    static async createDigimon(digimonSearched) {
        try {
          const digimon = await fetchOneDigimon(digimonSearched);

          const {
            id,
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
            id,
            name,
            imageNormalize,
            levelNormalize,
            typesNormalizer,
            attributesNormalize,
            fieldNormalize,
            descriptionNormalize,
            releaseDate
          );

          return newDigimon;
        } catch (error) {
          console.error(error);
        }
    }
}