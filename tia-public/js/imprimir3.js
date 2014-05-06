//function haber(){
<!-- Cambiar imagenes en src de img -->
var trozos = document.getElementById("srcs").innerHTML.split(",");
var ultimo = trozos.pop();
document.getElementById("srcs").innerHTML= '';
var i = 0;


function imprimir() {
	//ultimo = trozos.pop()
	//document.getElementById("srcs").innerHTML= '';	
	if(i<trozos.length){
		document.getElementById("fotos").innerHTML = '<img width="1900" height="952" src="/tia-alu-public/upload/' + trozos[i] + '">';
		i++
	}else{
	i = 0;
	}
}
//}
//setInterval(haber,1000);
//window.onload = setInterval(imprimir, 5000);
