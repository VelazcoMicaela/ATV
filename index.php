<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width; initial-scale=1.0; maximumscale=1.0; user-scalable=0;" />
	<title>ATV</title>
	<link href="https://fonts.googleapis.com/css?family=Oswald:200,400,700" rel="stylesheet"> 
	<link rel="atv" sizes="180x180" href="img/logoar.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="img/logoar.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="img/logoar.png" />
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
	<link rel="stylesheet" href="css/normalize.css" />
	<link rel="stylesheet" href="css/style10.css" />
	<link rel="stylesheet" href="css/home.css"/>
	<link rel="stylesheet" href="css/style_common.css"/>
	<script type="text/javascript" src="js/jquery-1.10.1.min.js"> </script>
	<script type="text/javascript" src="js/desplazar.js"> </script>
	
	<script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/styles.css">
    <script type="text/javascript">

    	$(document).ready(function(){
    	var time = 4000;
    		function animacion(){

    			$("#foto1").animate({"left": "+=100%"}, time, function(){
            $("#min3").css("filter", "contrast(30%)")
            $("#min2").css("filter", "contrast(100%)")
    				$("#foto2").animate({"left": "+=100%"}, time, function(){
              $("#min1").css("filter", "contrast(30%)")
              $("#min3").css("filter", "contrast(100%)")
    					$("#foto3").animate({"left": "+=100%"}, time, function(){
                $("#min2").css("filter", "contrast(30%)")
                $("#min1").css("filter", "contrast(100%)")
    						$("#foto3").css("left", "0")
    						$("#foto2").css("left", "0")
    						$("#foto1").css("left", "0")

    						animacion();
    			})})});
    		}

    		animacion();

    	});
    </script>
	
</head>
<body>
	<?php include ('inc/nav.php'); ?>

<section>
	    <div id="imagenes">
        <img src="img/home/foto3.jpg" id="foto3" />
        <img src="img/home/foto1.jpg" id="foto2" />
        <img src="img/home/foto3.jpg" id="foto1" />
    </div>

    <div class="ciscslid">
   		<div class="fotoactiva" id="min1"></div>
    	<div class="fotoactiva" id="min2"></div>
    	<div class="fotoactiva" id="min3"></div>
	</div>
</section>

<!-- COMIENZA ESCUELA -->
	<?php include ('inc/escuela.php'); ?>

<!-- FINALIZA ESCUELA -->

<!-- COMIENZA INSTRUCTORES -->
	<?php include ('inc/instructores.php'); ?>

<!-- FINALIZA INSTRUCTORES -->

<!-- COMIENZA GALERIA -->
	<?php include ('inc/galeria.php'); ?>
	
<!-- COMIENZA SEDES -->
	<?php include ('inc/sedes.php'); ?>
	
</body>
</html>
