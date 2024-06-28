var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`.
 * 
 * Retorna: 
 * - el mismo listado, ordenado alfabéticamente por el apellido de la persona 
 */
function ordenarPorApellido(listaDePersonas) {
    var lista = listaDePersonas.sort((a,b) => {
        return a.apellido.localeCompare(b.apellido)
    })
    return lista;
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista de strings, con sólo los nombres de las personas
 */
function soloNombres(listaDePersonas) {
    return listaDePersonas.forEach((objeto) => {
        return console.log(objeto.nombre);
    });
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - un numero, con el cálculo del promedio de las edades
 */
function promedioEdades(listaDePersonas) {
    var longi = listaDePersonas.length;
    var suma= 0, prom= 0;
    listaDePersonas.forEach((objeto) => {
        return suma= suma + objeto.edad;
    });
    prom = suma / longi;
    return prom;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - soloMayoresDeEdad
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una lista, array, conteniendo solamente las personas con más de 18 años
 */
function soloMayoresDeEdad(listaDePersonas) {
    var nuevoArray = [];
    var x;
    var longi = listaDePersonas.length;
    for (x = 0; x < longi; x++){
        if(listaDePersonas[x].edad > 17) {
            nuevoArray.push(listaDePersonas[x]);
        }
    }
    return nuevoArray;
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 05 - laPersonaMayor
 * 
 * Recibe
 * - `listaDePersonas`: una lista, array, con objetos de la forma `persona`
 * 
 * Retorna: 
 * - una objeto con la persona de mayor edad en todo el listado. En caso de que hayan 2 personas con la misma edad, se puede retornar la primera que aparezca en el listado.
 */
function laPersonaMayor(listaDePersonas) {
    var edadMayor = listaDePersonas[0].edad;
    var persona = {};
    var longi = listaDePersonas.length;
    var x = 0;
    for (x = 0; x < longi; x++) {
        if (listaDePersonas[x].edad > edadMayor){
            persona = {
                "apellido": listaDePersonas[x].apellido,
                "nombre": listaDePersonas[x].nombre,
                "edad": listaDePersonas[x].edad,
                "documento": listaDePersonas[x].documento
            }
        }
    }
    return persona;
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));