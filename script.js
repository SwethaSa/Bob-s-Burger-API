function fetchCharacters() {
    return fetch('https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=480')
      .then(response => response.json())
      .then(data => {
        if(data.code){
            throw new Error(data.message);
        }
        const charactersRow = document.querySelector('.characters');
        for (const character of data) {
            if(character.name) {
                const col = document.createElement('div');
                col.classList.add('col-6');
                col.innerHTML = `
                <div class="character">
                  <img src=${character.image}>
                  <h3> ${character.name}</h3>
                  <p>Gender: ${character.gender}</p>
                  <p>Occupation: ${character.occupation}</p>
                  Wiki Url: <a href="${character.wikiUrl}" >${character.wikiUrl}</a>
                </div>`;
                charactersRow.appendChild(col);
            }
        }
      })
      .catch(error => console.error('Error:', error));
  }
  
  fetchCharacters();
