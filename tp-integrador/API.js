fetch(`https://api.disneyapi.dev/character`)
.then((response) => response.json())  
.then(data => {  
    console.log(data)
})

async function Arianna(){
    var respuesta = await fetch("https://api.disneyapi.dev/character/308");
    var personaje = await respuesta.json();
    console.log(personaje.data.name);
}

Arianna();

objetos = [
    {url:"https://api.disneyapi.dev/character/6",
    color:"verde",
    descripcion:"Una tortuga"},
    {url:"https://api.disneyapi.dev/character/7",
    color:"azul",
    descripcion:"No sé"},
    {url:"https://api.disneyapi.dev/character/10",
    color:"azul",
    descripcion:"No sé"},
    {url:"https://api.disneyapi.dev/character/11",
    color:"azul",
    descripcion:"No sé"},
    {url:"https://api.disneyapi.dev/character/12",
    color:"azul",
    descripcion:"No sé"}
];

function personaje(){
    const nombre = document.createElement("p");
    const descripcion = document.createElement("p");
    const foto = document.createElement("img");
    async function datos(){
        var respuesta = await fetch("https://api.disneyapi.dev/character/308");
        var personaje = await respuesta.json();
        const textnombre = document.createTextNode(personaje.data.name);
        nombre.appendChild(textnombre);
        const textdescripcion = document.createTextNode("Una reina.");
        descripcion.appendChild(textdescripcion);
        foto.src = personaje.data.imageUrl;
        foto.className = "foto";
        foto.width = 100;
        foto.height = 100;
    }
    datos();
    document.getElementById("nombre").appendChild(nombre);
    document.getElementById("descripzinha").appendChild(descripcion);
    document.getElementById("fotinha").appendChild(foto);
}

function tarjeta(){
    const div = document.getElementById('contenedor-izquierda');
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta";
    div.appendChild(tarjeta);
    const foto = document.createElement("img");
    foto.className = "foto";
    tarjeta.appendChild(foto);
    const nombre = document.createElement("p");
    nombre.className = "nombre";
    const nombretxt = document.createTextNode("Nombre del personaje.");
    nombre.appendChild(nombretxt);
    tarjeta.appendChild(nombre);
    const descripcion = document.createElement("p");
    descripcion.className = "descripcion";
    const descripciontxt = document.createTextNode("Descripción.");
    descripcion.appendChild(descripciontxt);
    tarjeta.appendChild(descripcion);
}