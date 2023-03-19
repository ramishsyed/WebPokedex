
fetch('https://raw.githubusercontent.com/ramishsyed/WebPokedex/main/pokemondata.json')
    .then(response=>response.json())
    .then(data=>{
            name: data[0].name;
            image: data[0].image;
            entry: data[0].entry;
            type: data[0].type;
            height: data[0].height;
            weight: data[0].width;
            document.getElementById("pokemon-name").innerHTML = data[0].name;
            document.getElementById("pokemon-image").src = data[0].image;
            document.getElementById("pokedex-entry").innerHTML = data[0].entry;
            document.getElementById("pokemon-type").innerHTML = data[0].type;
            document.getElementById("pokemon-height").innerHTML = data[0].height;
            document.getElementById("pokemon-weight").innerHTML = data[0].weight;
            document.getElementById("blurb").innerHTML = data[0].blurb;
    });
/*const pokemon = {
	name: "My Custom Pokemon",
	image: "https://via.placeholder.com/192",
	entry: "This is my custom Pokemon's Pokedex entry.",
	type: "Electric",
	height: "1.2 m",
	weight: "25 kg"
};*/

document.getElementById("pokemon-name").innerHTML = data.name;
document.getElementById("pokemon-image").src = pokemon.image;
document.getElementById("pokedex-entry").innerHTML = pokemon.entry;
document.getElementById("pokemon-type").innerHTML = pokemon.type;
document.getElementById("pokemon-height").innerHTML = pokemon.height;
document.getElementById("pokemon-weight").innerHTML = pokemon.weight;
document.getElementById("blurb").innerHTML = pokemon.blurb;
