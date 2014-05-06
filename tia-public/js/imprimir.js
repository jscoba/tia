<!-- Cambiar imagenes en src de img -->
var trozos = document.getElementById("srcs").innerHTML.split(",");
document.getElementById("srcs").innerHTML= trozos[1];


var longitud = trozos.length;
longitud = longitud -2;
var src = document.getElementById("foto").innerHTML;
function imprimir(longitud, trozos, src){
	var estado = 0;
	function cambio(longitud, trozos, estado, src){	
		if(estado<longitud){
			src = '/devel/tia/admin/' + trozos[estado];
			estado = estado + 1;
		}else{
			estado = 0;
		}
	}
	setInterval(cambio(longitud, trozos, estado, src),1000);
}

function imprimir2(longitud, trozos, src){
	for(var i = 0; i <= longitud; i++) {
		src = '<img id="foto" width="1080" height="952" src="/devel/tia/admin/' + trozos[i] + '">';	
