let nombre = prompt("Ingrese el nombre:");
let apellido = prompt("Ingrese el apellido:");
let dni = prompt("Ingrese su DNI:");

let telefonos = [];

while (true) {
    let telefono = prompt("Ingrese su teléfono:");
    telefonos.push(telefono);

    let agregarNumero = prompt("¿Quiere agregar otro número? 1.Sí, 2.No:");

    if (agregarNumero === "2") {
        break;
    }
}

let persona = [nombre, apellido, dni, telefonos];

console.log(persona);