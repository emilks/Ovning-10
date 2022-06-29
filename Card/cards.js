const output = document.querySelector('#output');
const form = document.querySelector('#inputForm');


form.addEventListener('submit', getApi);


//function(e)

function getApi(e){
    e.preventDefault();
    console.log("Pog Pog Pog");
    
    
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then(res => res.json())
    .then(data =>
        {
            output.innerHTML = "";
            console.log(data);
            //let char = data.result[0].properties;
            //let s = `Height: ${char.height}, Mass: ${char.mass}, Gender: ${char.gender}, Hair Color: ${char.hair_color}`;
            const element = document.createElement("img");
            console.log(data.cards[0]);
            element.src = data.cards[0].image;
            output.appendChild(element);
        } )
    .catch(err => console.error(err))
    
    //let s = `Height: ${value1}, Mass: ${value2}, Gender: ${test}, Hair Color: ${test}`;
}