<?php

/* Conexión BD. */
include_once 'conectar.php';

/* Consulta imágenes por fecha (activas para hoy). */
$fecha = date("Y-n-j");
$consulta = "SELECT `pti_archivo` FROM `pro_t_imagenes` WHERE `pti_fecha_ini` <= '".$fecha."' AND `pti_fecha_fin` >= '". $fecha."'";
$resultado = mysql_query($consulta) or die(mysql_error());


# establecemos un bucle que recoge en un array 
# cada una de las LINEAS DEL RESULTADO DE LA CONSULTA 
# utilizamos en esta ocasión «mysql_fetch_row» 
# en vez de «mysql_fetch_array» para EVITAR DUPLICADOS 
# recuerda que esta ultima función devuelve un array escalar 
# y otro asociativo con los resultados 

$result = array();
while ($registro = mysql_fetch_row($resultado)){ 
        
       # insertamos un salto de línea en la tabla HTML

       # establecemos el bucle de lectura del ARRAY 
       # con los resultados de cada LINEA 
       # y encerramos cada valor en etiquetas <td></td> 
       # para que aparezcan en celdas distintas de la tabla 

       foreach($registro  as $clave){
       $result[] = $clave; 
 } 
}

/* Si no hay avisos, mostrar publicidad. */
if (sizeof($result)==0)
{
	$result[]='autobombo-01.png';
	$result[]='autobombo-02.png';
	$result[]='autobombo-03.png';
	$result[]='autobombo-04.png';
	$result[]='autobombo-05.png';
}
/* Si no hay avisos, mostrar publicidad. */

shuffle($result); 
echo implode("|", $result);
/* Crear array javascript con fotos. */

/* Desconexión BD */
mysql_close();
?>
