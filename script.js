alert("Ecriptador de Texto");
function encriptar(){
    var texto=document.getElementById("textoEncriptado").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let lupa = document.getElementById("lupa");
  

    var fraseEncriptada = texto.replace(/e/img, "enter");
    var fraseEncriptada = fraseEncriptada.replace(/o/img, "ober");
    var fraseEncriptada = fraseEncriptada.replace(/i/img, "imes");
    var fraseEncriptada = fraseEncriptada.replace(/a/img, "ai");
    var fraseEncriptada = fraseEncriptada.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML=fraseEncriptada;
    document.getElementById("botonCopiar").style.display ="show";
    document.getElementById("botonCopiar").style.display ="inherit";
    

    if (texto.length != 0) {
        document.getElementById("textoEncriptado").value = "";
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        lupa.src = "./image/encriptado.png";
      } else {
        lupa.src = "./image/lupa.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
      }

}

function desencriptar(){
    var texto=document.getElementById("textoEncriptado").value.toLowerCase();
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let lupa = document.getElementById("lupa");

    var fraseEncriptada = texto.replace(/enter/img, "e");
    var fraseEncriptada = fraseEncriptada.replace(/ober/img, "o");
    var fraseEncriptada = fraseEncriptada.replace(/imes/img, "i");
    var fraseEncriptada = fraseEncriptada.replace(/ai/img, "a");
    var fraseEncriptada = fraseEncriptada.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML=fraseEncriptada;

    if (texto.length != 0) {
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        lupa.src = "./image/desencriptado.png";
      } else {
        lupa.src = "./image/lupa.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar un texto");
      }

}

function copiar(){
    
    var contenido= document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("Texto copiado con exito");


}
