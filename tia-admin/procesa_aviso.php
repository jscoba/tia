<?php
  include "config.php";
  /* Crear el registro. */
  mysql_connect(MYSQL_SERVER, MYSQL_USERNAME, MYSQL_PASSWORD) or die(mysql_error());
  mysql_select_db(MYSQL_DATABASE) or die(mysql_error());
  mysql_set_charset('utf8');

  $query_txt = "INSERT INTO pro_t_avisos(pta_fecha_ini, pta_fecha_fin, pta_aviso)".
          "VALUES ('".$_POST["pta_fecha_ini"]."', '".$_POST["pta_fecha_fin"]."', '".$_POST["pta_aviso"]."');";

  $result = mysql_query($query_txt) or die(mysql_error());  
?>

<a href="nuevo_aviso.html">Otro aviso</a>
