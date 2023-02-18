

var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var botonCopiar = document.querySelector(".btn-copiar")
var munheco = document.querySelector(".contenedor-munheco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector("#mensaje-resultado");

function encriptar(){
    ocultar();
    resultado.textContent = encriptarTexto(recuperarTexto())
}

function desencriptar(){
    ocultar();
    resultado.textContent = desencriptarTexto(recuperarTexto()); 
}

function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultar(){
    munheco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
    
}

function encriptarTexto(mensaje){
    var texto ="";
    texto = mensaje;
    var textoEncriptado = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "e"){
            textoEncriptado += "enter";
        }
        else if(texto[i] == "i"){
            textoEncriptado += "imes";
        }
        else if(texto[i] == "a"){
            textoEncriptado += "ai";
        }
        else if(texto[i] == "o"){
            textoEncriptado += "ober";
        }
        else if(texto[i] == "u"){
            textoEncriptado += "ufat";
        }
        else{
            textoEncriptado += texto[i];
        }
    }

    return textoEncriptado;
}

function desencriptarTexto(mensaje){
    var texto ="";
    texto = mensaje;
    var textoDesencriptado = "";

    for (var i = 0; i < texto.length; i++) {
        if (texto[i] == "e"){
            textoDesencriptado += "e";
            i += 4;
        }
        else if(texto[i] == "i"){
            textoDesencriptado += "i";
            i += 3;
        }
        else if(texto[i] == "a"){
            textoDesencriptado += "a";
            i += 2;
        }
        else if(texto[i] == "o"){
            textoDesencriptado += "o";
            i += 3;
        }
        else if(texto[i] == "u"){
            textoDesencriptado += "u";
            i += 3;
        }
        else{
            textoDesencriptado += texto[i];
        }
    }

    return textoDesencriptado;
}

function copiar(){
    var content = resultado.textContent;
    navigator.clipboard.writeText(content)
}

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
