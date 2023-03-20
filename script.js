
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
                option.text = data.name;
                dropdown.add(option);
              });

              const selectElement = document.querySelector('select');

              selectElement.querySelectorAll('option').forEach((option, index) => {
                option.innerText = `${option.innerText}`;
              });

              selectElement.addEventListener('change', (event) => {
                const selectedIndex = event.target.selectedIndex;
                const selectedOption = event.target.options[selectedIndex].text;
                document.getElementById("pokemon-name").innerHTML = data[selectedIndex].name;
                document.getElementById("pokemon-image").src = data[selectedIndex].image;
                document.getElementById("pokedex-entry").innerHTML = data[selectedIndex].entry;
                document.getElementById("pokemon-type").innerHTML = data[selectedIndex].type;
                document.getElementById("pokemon-height").innerHTML = data[selectedIndex].height;
                document.getElementById("pokemon-weight").innerHTML = data[selectedIndex].weight;
                document.getElementById("blurb").innerHTML = data[selectedIndex].blurb;
              });
     
                        

            document.getElementById("pokemon-name").innerHTML = data[0].name;
            document.getElementById("pokemon-image").src = data[0].image;
            document.getElementById("pokedex-entry").innerHTML = data[0].entry;
            document.getElementById("pokemon-type").innerHTML = data[0].type;
            document.getElementById("pokemon-height").innerHTML = data[0].height;
            document.getElementById("pokemon-weight").innerHTML = data[0].weight;
            document.getElementById("blurb").innerHTML = data[0].blurb;

            

    });
