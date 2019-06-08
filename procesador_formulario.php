<?php 

$nombre=$_POST ['nombre'];
$apellido=$_POST['apellido'];
$email=$_POST['email'];
$comentario=$_POST['comentario'];

$remitente= "From: $nombre <$email>";
$destino= 'velazcomicaela@gmail.com';
$asunto= $nombre . 'Envio la sig consulta a traves de la web';

$cuerpo = 'Nombre: ' . $nombre . "\r\n";
$cuerpo .= 'Apellido: ' . $apellido . "\r\n";
$cuerpo .= 'Email: ' . $email . "\r\n";
$cuerpo .= 'Comentario:  ' . $comentario;


$remitente_usuario ="From: sitio web <info@gmail.com>";
$asunto_usuario ='Aviso de recibo de consulta';

$contenido_usuario ='Hola ' . $nombre . ' enviaste el siguiente msg:' . $comentario . "\r\n";
$contenido_usuario .= 'A la brevedad nos comunicaremos';

mail($destino, $asunto, $cuerpo, $remitente); // llega al dueño de la empresa q controla

mail($email, $asunto_usuario, $contenido_usuario , $remitente_usuario) ;

header('location:index.php?envio=ok#sedes'); // #contacto funciona como un ancla

 ?>