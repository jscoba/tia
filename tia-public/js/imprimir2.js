<!-- Cambiar imagenes en src de img -->
var trozos = document.getElementById("srcs").innerHTML.split(",");
var ultimo = trozos.pop();
document.getElementById("srcs").innerHTML= trozos[1];

//alert(document.getElementById("fotos").innerHTML);
//var img = document.getElementById("fotos").innerHTML
//document.getElementById("fotos").innerHTML = '<img width="1080" height="952" src="/devel/tia/admin/' + trozos[1] + '" >';

function imprimir(){
	//var img = document.getElementById("fotos").innerHTML
	for(i in trozos){
		function fin(){
			document.getElementById("fotos").innerHTML = '<img width="1048" height="952" src="/devel/tia/admin/' + trozos[i] + '">';
		}		
		setInterval(fin, 1000);
		//setTimeout(1000);
	}
}
window.onload = setInterval(imprimir, 1);
//window.onload = print()
