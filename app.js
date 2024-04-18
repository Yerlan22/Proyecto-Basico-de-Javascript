let numeroSecreto = 0;
let intentos = 1;
let listaNumsUsados = [];
let numMax = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto a la primera
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', "El numero es menor");
        } else if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', "El numero es mayor");
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}


function generarNumeroSecreto() {
    let numGenerado = Math.floor(Math.random()*10)+1;

    console.log(numGenerado);
    console.log(listaNumsUsados);
    //Ya tenemos todos los nums?
    if(listaNumsUsados.length == numMax){
        asignarTextoElemento('p', "Ya se adivinaron todos los nums posibles");
        document.getElementById('intentar').setAttribute('disabled', true);
    }else{
    //Si el numGenerado está en la lista return, sino se cambia
    if(listaNumsUsados.includes(numGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumsUsados.push(numGenerado);
        return numGenerado;
    }
    }

}

function limpiarCaja(){
    //Cuando me refieron a un ID '#'
    document.querySelector('#valorUsuario').value= '';
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numMax}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    console.log(numeroSecreto);
    return;
}

function reiniciarJuego(){
    //limpiamos caja
    limpiarCaja();
    //indicamos mensaje de intervalo
    //generamos el num aleatorio
    //deshabilitar el boton nuevo juego otra vez
    //reiniciar contador
    condicionesIniciales();
    return;
}

condicionesIniciales();
