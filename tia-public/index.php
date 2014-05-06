<!DOCTYPE html> 
<html>
<head>
    <title>TIA</title>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="900">
    <div id='listaimg'><?php
			include "rutaimg.php";
			?></div>
		<div id='listaavisos'><?php
			include "rutaaviso.php";
    	?></div>
    <link rel="stylesheet" type="text/css" href="css/tia.css" />
</head>
<body>
  <table>
    <tr height="64">
      <td class="esquinaizq"></td>
      <td class="superiorizq"><div id="headernombre"><img src="images/logo-ies-bembezar.gif"</div></td>
      <td class="superiorcen"><div id="tiempo"><?php
                    include "tiempo.php";
                    tiempo();
                ?></div></td>
      <td class="superiorder"><div id="reloj"></div></td>
      <td class="esquinader"></td></tr>
    <tr height="64"><td class="esquinaizq"></td>
      <td colspan="3"><div id="avisos"></div></td>
      <td class="esquinader"</td></tr>
    <tr height="952"><td colspan="5"><div id="fotos" /></td></tr>
    <!---<tr height="32"><td colspan="3"><div id="rss">RSS</div></td></tr>--->
 
    </table>
<!--	<script type="text/javascript" src="js/imprimir3.js"> </script> -->
	<script type="text/javascript" src="js/imprimircompleto.js"> </script>
</body>
</html>
