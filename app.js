const pokemon = document.querySelector('#pokemon');
const go = document.querySelector('#getpoke');

const item = document.querySelector('#item-select');
const itemBtn = document.querySelector('#item-btn');

const location2 = document.querySelector('#location-select');
const locationBtn = document.querySelector('#location-btn');
const locationText = location2.options[location2.selectedIndex].text



go.addEventListener('click', async function(e){
    e.preventDefault();
    const pokemonVal = pokemon.value;
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonVal}/`);
    const img = document.createElement('img');
    img.src = res.data.sprites.front_shiny
    const grid = document.querySelector('#image-grid');
    img.style.height = "250px";
    img.style.width = "250px";
    grid.prepend(img);

    

})


itemBtn.addEventListener('click', async function(e) {
    e.preventDefault();
    const itemVal = item.value;
    const res = await axios.get(`https://pokeapi.co/api/v2/item/${itemVal}`);
    const img = document.createElement('img')
    img.src = res.data.sprites.default
    const grid = document.querySelector('#item-grid');
    img.style.height = "250px"
    img.style.width = "250px";
    grid.prepend(img)
})


locationBtn.addEventListener('click', async function(e) {
    e.preventDefault();
    const location2Val = location2.value;
    // Get text of option from select
    const name = location2.options[location2.selectedIndex].text
    const res = await axios.get(`https://pokeapi.co/api/v2/location/${location2Val}/`);
    const region = res.data.region.name
    const p = document.createElement('p');
    p.innerText = `${name.toUpperCase()} IS IN  ${region.toUpperCase()}.`
    p.style.fontSize = '50px'
    const span = document.querySelector('#location-info')
    span.appendChild(p)

})


// To start working with API.  request general url and console.log res.data

// then request full url and look at what properties and values you need

// const getPokemon = async () => {
// const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/bulbasaur/`);
// console.log(res.data);
// };

// getPokemon()

// const getItem = async () => {
//     const res = await axios.get("https://pokeapi.co/api/v2/item/master-ball");
//     console.log(res.data);
// };


// const getCityInfo = async () => {
//     const res = await axios.get("https://pokeapi.co/api/v2/location/wayward-cave");
//     console.log(res.data);
// };