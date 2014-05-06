<!-- Conseguir avisos -->
var trozos2 = document.getElementById("avisoraw").innerHTML.split(",");
var ultimo2 = trozos2.pop();
document.getElementById("avisoraw").innerHTML= '';
var i2 = 0;
var mostrar_imagen = 0;
var mostrar_aviso = 0;
if(trozos2.length==0){document.getElementById("error").innerHTML = '';}


function imprimir2() {
	//document.getElementById("avisos").innerHTML= '';	
	if(i2==trozos2.length){
		i2=0;
	}
  document.getElementById("avisos").innerHTML = '<p>' + trozos2[i2] + '</p>';
  i2++;
}

function carga(){
	if(mostrar_imagen==0)
	{
		imprimir();
		mostrar_imagen = 15;
	}
	if(mostrar_aviso==0)
	{
		imprimir2();
		mostrar_aviso = 4;
	}	
	mostrar_aviso--;
	mostrar_imagen--;
}
//}
//setInterval(haber,1000);
window.onload = setInterval(carga, 1000);
