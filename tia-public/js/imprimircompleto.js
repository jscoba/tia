<!-- Conseguir avisos -->
var mostrar_foto = 0;
var mostrar_aviso = 0;
var trozo_foto = document.getElementById("listaimg").innerHTML.split('|');
var trozo_aviso = document.getElementById("listaavisos").innerHTML.split('|');
var ifot = 0;
var iavi = 0;
document.getElementById("listaimg").innerHTML= '';
document.getElementById("listaavisos").innerHTML= '';
function imprimir_foto()
{
  if(ifot==trozo_foto.length)
  {
    ifot=0;
  }
  document.getElementById("fotos").innerHTML = '<img width="1900" height="952" src="/tia-alu-public/upload/' + trozo_foto[ifot] + '">';
  ifot++;
}

function imprimir_aviso()
{
  if(iavi==trozo_aviso.length)
  {
    iavi=0;
  }
  document.getElementById("avisos").innerHTML = '<p>' + trozo_aviso[iavi] + '</p>';
  iavi++;
}

function muestra_reloj()
{
  var nombre_mes=new Array();
  nombre_mes[0]="ene";
  nombre_mes[1]="feb";
  nombre_mes[2]="mar";
  nombre_mes[3]="abr";
  nombre_mes[4]="may";
  nombre_mes[5]="jun";
  nombre_mes[6]="jul";
  nombre_mes[7]="ago";
  nombre_mes[8]="sep";
  nombre_mes[9]="oct";
  nombre_mes[10]="nov";
  nombre_mes[11]="dic";

  var fechahora = new Date();
  var horas = fechahora.getHours();
  var minutos = fechahora.getMinutes();
  var segundos = fechahora.getSeconds();
  var diames = fechahora.getDate();
  var mes = fechahora.getMonth();

  if(horas < 10) {horas='0'+ horas;}
  if(minutos < 10) {minutos='0'+ minutos;}
  if(segundos < 10) {segundos='0'+ segundos;}
  if(diames < 10) {diames='0'+ diames;}

  horafinal =  diames+'-'+nombre_mes[mes]+' '+horas+':'+minutos+':'+segundos;
  document.getElementById("reloj").innerHTML = horafinal;
}

function carga()
{

  if(mostrar_foto==0)
  {
    imprimir_foto();
    mostrar_foto = 10;
  }
  if(mostrar_aviso==0)
  {
    imprimir_aviso();
    mostrar_aviso = 20;
  }
  muestra_reloj()
  mostrar_aviso--;
  mostrar_foto--;
}

window.setInterval(carga, 1000);
