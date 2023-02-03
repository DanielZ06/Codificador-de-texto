function encriptar(){

    var texto=document.getElementById("inputTexto").value.toLowerCase();
    //g para toda la linea u oración.
    //m para multiples parrafos
    var txtCifrado =texto.replace(/e/gm,"enter");
    var txtCifrado =txtCifrado.replace(/o/gm,"ober");
    var txtCifrado =txtCifrado.replace(/i/gm,"imes");
    var txtCifrado =txtCifrado.replace(/a/gm,"ai");
    var txtCifrado =txtCifrado.replace(/u/gm,"ufat");

    document.getElementById("imgDer").style.display ="none";
    document.getElementById("texto").style.display ="none";
    document.getElementById("textoDos").innerHTML=txtCifrado; //reemplazamos el HTML original por el texto cifrafo usando .innerHTML//
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}
function desEncriptar(){

    var texto=document.getElementById("inputTexto").value.toLowerCase();
    //g para toda la linea u oración.
    //m para multiples parrafos
    var txtCifrado =texto.replace(/enter/gm,"e");
    var txtCifrado =txtCifrado.replace(/ober/gm,"o");
    var txtCifrado =txtCifrado.replace(/imes/gm,"i");
    var txtCifrado =txtCifrado.replace(/ai/gm,"a");
    var txtCifrado =txtCifrado.replace(/ufat/gm,"u");

    document.getElementById("imgDer").style.display ="none";
    document.getElementById("texto").style.display ="none";
    document.getElementById("textoDos").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}
function copiar(){

    var contenido =document.querySelector("#textoDos")
    contenido.select();
    document.execCommand("copy");
    alert("Se a copiado el texto!");
}

function limpiar(){
    window.location.reload();
}
