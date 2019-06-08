<section><a name="sedes"></a>
		<div class="cuadro2 fndsedes"></div>
		
		<h1 class="titsed"> <span class="finita">DONDE </span>ENCONTRARNOS</h1>
		
		
<div class="cajassedes">

		<div class="lugares">
			<div class="secsed">
				<h4 class="partido">CABA Tango gym</h4>
				<h4 class="domi">Calle Mendoza N1430</h4>
				<h4 class="domi">SABON NIM NATALIA</h4>
				<h4>11-2868-2483</h4>
				<h4>@Naty_Velazco</h4>
				<h4>nataliaelizabethvelazco@gmail.com</h4>
			</div>
		</div>
	
	<div class="lugares">
		<div class="secsed">
			<h4 class="partido">Quilmes Soc Fom Ameghino</h4>
			<h4 class="domi">Calle 392 N774</h4>
			<h4 class="domi">SABON MATIAS</h4>
			<h4>11-4427-4550</h4>
			<h4>@Maty.velazco</h4>
			<h4>anselmomvelazco@gmail.com</h4>
		</div>
	</div>
		
	<div class="lugares">
		<div class="secsed">
			<h4 class="partido">Solano Grupo Esparta</h4>
			<h4 class="domi">Calle 827 N1812</h4>
			<h4 class="domi">SABON SEBASTIAN</h4>
			<h4>11-2714-0668</h4>
			<h4>@Seba_Lasserre</h4>
			<h4>Sebaslasserre99@gmail.com</h4>
		</div>
	</div>
	
	</div>
		
	<div class="mapasyform">
	<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d13112.772677443976!2d-58.3089576!3d-34.7507265!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1557608210155!5m2!1ses-419!2sar" width="77%" height="300" frameborder="0" allowfullscreen></iframe>	
	
	<div class="formytext">
	<h4 class="domi">Estamos para guiarte</h4>
	<h4>Dejanos tu comentario con la consulta</h4>
	
	<form action="procesador_formulario.php" method="post" >
		<div>
			<label for="Comentario"></label>
			<textarea name="comentario" id="coment" placeholder="Comentario" required></textarea>
		</div>

		<div class="nomap">
			<input type="text" id="coment" placeholder="Nombre" name="nombre" required/>
			<input type="text" id="coment" placeholder="Apellido" name="apellido" required />
		</div>

		<div>
			<input type="text" id="coment" placeholder="Ingrese su mail" name="email" required/>
		</div>

		<div class="envbor">
			<input type="submit" id="envibor" value="Enviar" />
			<input type="reset" id="envibor" value="Borrar" />
		</div>	
	</form>
	</div>
	</div>
			<?php
			if (isset($_GET['envio']) && $_GET['envio'] == 'ok') {?>
				<div>El mensaje se envio correctamente</div>
			<?php } ?>
</section>