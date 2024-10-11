export class Components {
    static oneCardDigimon(digimon) {
        return `
            <div class="card">
                <div class="card__header">
                    <img src="${digimon.image}" alt="${digimon.name}" />
                    <h2>${digimon.name}</h2>
                </div>
                <div class="card__body">
                      <ul>
                        <li>Level: ${digimon.level[0]}</li>
                        <div>
                            <p>attributes</p>

                            ${digimon.attributes
                              .map((attribute) => `<li>${attribute}</li>`)
                              .join("")}
                        </div>
                        <div>
                            <p>Types</p>
                            
                            ${digimon.types.map((type) => `<li>${type}</li>`).join("")}
                        </div>
                        <div>
                            <p>Fields</p>
                            
                            ${digimon.fields
                              .map(
                                (field) =>
                                  `<li>
                                      <div>
                                          <p>${field.field}</p>
                                          <img src="${field.image}" alt="imagen de ${field.field}" />
                                      </div>
                                  </li>`
                              )
                              .join("")}
                        </div>
                    </ul>
                    <p>${digimon.description.description}</p>
                    <p>Año de lanzamiento: ${digimon.release}</p>
                </div>
            </div>
    `;
    }

    static cardDigimon(digimon) {
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
    `;
    }
}