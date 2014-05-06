function muestraReloj(){
    var fechahora = new Date();
    var horas = fechahora.getHours();
    var minutos = fechahora.getMinutes();
    var segundos = fechahora.getSeconds();
    
    if(horas < 10) {horas='0'+ horas;}
    if(minutos < 10) {minutos='0'+ minutos;}
    if(segundos < 10) {segundos='0'+ segundos;}
    horafinal =  horas+':'+minutos+':'+segundos;
    document.getElementById("reloj").innerHTML = horafinal;
}


window.onload = setInterval(muestraReloj, 1000);
