
fetch('https://raw.githubusercontent.com/ramishsyed/WebPokedex/main/pokemondata.json')
    .then(response=>response.json())
    .then(data=>{
            name: data[0].name;
            image: data[0].image;
            entry: data[0].entry;
            type: data[0].type;
            height: data[0].height;
            weight: data[0].width;
            const dropdown = document.getElementById('pokemon-dropdown');
            data.forEach(data => {
                const option = document.createElement('option');
                option.value = data.name;
                console.log(option.value);
                option.text = data.name;
                console.log(option.text);
                dropdown.add(option);
              });
            document.getElementById("pokemon-name").innerHTML = data[0].name;
            document.getElementById("pokemon-image").src = data[0].image;
            document.getElementById("pokedex-entry").innerHTML = data[0].entry;
            document.getElementById("pokemon-type").innerHTML = data[0].type;
            document.getElementById("pokemon-height").innerHTML = data[0].height;
            document.getElementById("pokemon-weight").innerHTML = data[0].weight;
            document.getElementById("blurb").innerHTML = data[0].blurb;
    });
