<?php

/* Conexión BD. */
include 'conectar.php';

/* Consulta imágenes por fecha (activas para hoy). */
$fecha = date("Y-n-j");
$consulta = "SELECT `pta_aviso` FROM `pro_t_avisos` WHERE `pta_fecha_ini` <= '".$fecha."' AND `pta_fecha_fin` >= '". $fecha."'";
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
shuffle($result); 
echo implode("|", $result);

/* Crear array javascript con fotos. */

/* Desconexión BD */
mysql_close();
?>
