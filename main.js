// Escribe una aplicación con un String que contenga una contraseña cualquiera.
// Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando
// aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo
// “Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale,
// aunque le queden intentos).


let contraseña = ("Olivia")

let usuario = prompt("Escriba aqui su contraseña")


if (usuario === contraseña) {
    console.log("Su contraseña es correcta")
} else {

    for (let i = 3; i >= 1; i--) {
        if (usuario === contraseña) {
            console.log("Su contraseña es correcta")
        } else {

            console.log("Su contraseña es incorrecta")
            prompt("Escriba aqui su contraseña")
        }
    }

}