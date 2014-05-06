<?

$user = 'profundiza';
$pass = 'profundiza';

if($_POST['user']==$user && $_POST['pass']==$pass)
{
echo 'Login correcto: Redireccionando...';
sleep(3);
header ("Location: seleccion.html");
}else{
echo 'Datos incorrectos';
sleep(3);
header ("Location: index.html");
}


?>
