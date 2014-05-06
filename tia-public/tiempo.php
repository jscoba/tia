<?
function tiempo(){
$html=file('http://www.aemet.es/es/eltiempo/prediccion/municipios/mostrarwidget/azuaga-id06014?w=g1p01010000ovmffffffw217z115x4f86d9t95b6e9');
$imagen=$html[43];
$expresion="#estado_cielo/([0-9]+).gif#is";
preg_match('#estado_cielo/([0-9]+).gif#is',$html[43],$code);
$img='images/tiempo/';
$img=$img.$code[1];
$img=$img.'.gif';
echo '<img src="', $img,'" </>';


preg_match('#class="texto_azul">([0-9]+)</span>#is',$html[44],$tempmin);
preg_match('#class="texto_rojo">([0-9]+)&nbsp;</span>#is',$html[44],$tempmax);

$tempreal=($tempmin[1]+$tempmax[1])/2;
echo ' ', $tempreal, 'ºC';
}
?>
