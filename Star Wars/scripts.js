const output = document.querySelector('#output');
const form = document.querySelector('#inputForm');


form.addEventListener('submit', getApi);


//function(e)

function getApi(e){
    e.preventDefault();

    let item = document.getElementById("item").value;
    document.getElementById("item").value = "";
    
    fetch("https://www.swapi.tech/api/people/?name="+item)
    .then(res => res.json())
    .then(data =>
        {
            console.log(data);
            let char = data.result[0].properties;
            //let s = `Height: ${char.height}, Mass: ${char.mass}, Gender: ${char.gender}, Hair Color: ${char.hair_color}`;
            
            output.innerHTML =
            `
            ${char.name}
            Height: ${char.height}
            Mass: ${char.mass}
            Gender: ${char.gender}
            Hair Color: ${char.hair_color}
            `
            /*output.innerHTML =
            `
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">${char.name}</h5>
              <p class="card-text">Height: ${char.height}</p>
              <p class="card-text">Mass: ${char.mass}</p>
              <p class="card-text">Gender: ${char.gender}</p>
              <p class="card-text">Hair Color: ${char.hair_color}</p>
            </div>
            </div>
            `*/
        } )
    .catch(err => console.error(err))
    
    //let s = `Height: ${value1}, Mass: ${value2}, Gender: ${test}, Hair Color: ${test}`;
}