async function bree(){
    var respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/4");
    var pokemon = await respuesta.json();
    console.log(pokemon.name);
}

bree();
//imprime "charmander"