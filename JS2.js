alert (" hola buenos dias par el registro se le van a pedir varios datos ")
let nombre      = prompt("ingrese su nombre")
let apellido    = prompt(" ingrese su apellido")
let naci        = parseInt(prompt("ingrese su año de nacimiento"));

/*este si funciona*/
while (isNaN(naci)) {
    alert ("porfabor ingrese un valor numerico")
    naci = parseInt(prompt("ingrese su año de nacimiento"));
}

const hoy = 2023

let resltado = 0;
function resta (a, b) {
    resultado = a - b;
    return resultado
}
let resultadoFuera = resta (hoy,naci)

let contra = ""
 if (resultadoFuera > 18) {
    alert (`SI puedes registrarte ${nombre} ${apellido} tienes ${resultadoFuera} años`);
    contra = prompt ("ingrese una contraseña")
    alert (`su nombre de usuario es ${nombre} ${apellido} y su contrasña es ${contra}`)
 } else alert (`NO puedes registrarte ${nombre} ${apellido} tienes ${resultadoFuera} años`);


function refrescarPagina() {
    location.reload();
}