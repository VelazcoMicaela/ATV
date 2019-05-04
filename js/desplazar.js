
$(document).ready(function(){

	//Ocultar / Mostrar bloque
	/*$("#carita2").click(function() {
		$("#instructor_actual").toggle(1500);
	},function(){ 
		$("#instructor_actual").toggle(1500);
	});*/
	
	/*$("#carita2").click(function() {
		$("#instructor_actual").toggle(1500, function(){ 
		$("#instructor_actual").toggle(1500);
		});
	});*/
	
		$("#carita1").click(function() {
		$("#instructor_actual").toggle(750, function() {
			$(".circulosins").removeClass("elegido");
			$("#carita1").addClass("elegido");
			var text = "<h2 class=\"sec secinst\">SabonNim</h2>"
				+ "<h3 class=\"dan\">IVDAN</h3>"
				+ "<img src=\"img/instructores/02.jpg\" class=\"cuadro1 fotoins\"/>"
				+ "<h1 class=\"nombins\"> <span class=\"finita\">NATALIA </span>VELAZCO</h1>"
				+ "<p class=\"presentacion\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
				+ "<div class=\"colorblanco\"></div> "
				+ "<div class=\"lugins\">"
				+ "<div class=\"secsed\">" 
					+ "<h4 class=\"horario\">HORARIO</h4>"
					+ "<h4 class=\"domi\">Lun Mie Vie</h4>"
					+ "<h4 class=\"domi\">18hs a 19.20hs</h4>"
					+ "<h4>Sede CABA Tango gym</h4>"
				+ "</div>"
			+ "</div>"
			document.getElementById("instructor_actual").innerHTML = text;
			$("#instructor_actual").toggle(750);
		});
			
	});
	
	$("#carita2").click(function() {
		$("#instructor_actual").toggle(750, function() {
			$(".circulosins").removeClass("elegido");
			$("#carita2").addClass("elegido");
			var text = "<h2 class=\"sec secinst\">Sabon</h2>"
				+ "<h3 class=\"dan\">IIIDAN</h3>"
				+ "<img src=\"img/instructores/02.jpg\" class=\"cuadro1 fotoins\"/>"
				+ "<h1 class=\"nombins\"> <span class=\"finita\">MATIAS </span>VELAZCO</h1>"
				+ "<p class=\"presentacion\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
				+ "<div class=\"colorblanco\"></div> "
				+ "<div class=\"lugins\">"
				+ "<div class=\"secsed\">" 
					+ "<h4 class=\"horario\">HORARIO</h4>"
					+ "<h4 class=\"domi\">Lun 19.30hs a 21hs</h4>"
					+ "<h4 class=\"domi\">Mie 19hs a 20hs</h4>"
					+ "<h4 class=\"domi\">Vie 18hs a 20hs</h4>"
					+ "<h4>Sede Quilmes Soc. de</h4>"
					+ "<h4>Fom. Ameghino</h4>"
				+ "</div>"
			+ "</div>"
			document.getElementById("instructor_actual").innerHTML = text;
			$("#instructor_actual").toggle(750);
		});
			
	});
	
		$("#carita3").click(function() {
		$("#instructor_actual").toggle(750, function() {
			$(".circulosins").removeClass("elegido");
			$("#carita3").addClass("elegido");
			var text = "<h2 class=\"sec secinst\">Sabon</h2>"
				+ "<h3 class=\"dan\">IIIDAN</h3>"				
				+ "<img src=\"img/instructores/02.jpg\" class=\"cuadro1 fotoins\"/>"
				+ "<h1 class=\"nombins\"> <span class=\"finita\">AXEL </span>CHAVÉZ</h1>"
				+ "<p class=\"presentacion\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
				+ "<div class=\"colorblanco\"></div> "
				+ "<div class=\"lugins\">"
				+ "<div class=\"secsed\">" 
					+ "<h4 class=\"horario\">HORARIO</h4>"
					+ "<h4 class=\"domi\">Lun 18hs a 19.30hs</h4>"
					+ "<h4 class=\"domi\">Mie 18hs a 19hs</h4>"
					+ "<h4 class=\"domi\">Vie 18hs a 20hs</h4>"
					+ "<h4>Sede Quilmes Soc. de</h4>"
					+ "<h4>Fom. Ameghino</h4>"
				+ "</div>"
			+ "</div>"
			document.getElementById("instructor_actual").innerHTML = text;
			$("#instructor_actual").toggle(750);
		});
			
	});
	
		$("#carita4").click(function() {
		$("#instructor_actual").toggle(750, function() {
			$(".circulosins").removeClass("elegido");
			$("#carita4").addClass("elegido");
			var text = "<h2 class=\"sec secinst\">Sabon</h2>"
				+ "<h3 class=\"dan\">IDAN</h3>"				
				+ "<img src=\"img/instructores/02.jpg\" class=\"cuadro1 fotoins\"/>"
				+ "<h1 class=\"nombins\"> <span class=\"finita\">SEBASTIAN </span>LASSERRE</h1>"
				+ "<p class=\"presentacion\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sintoccaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
				+ "<div class=\"colorblanco\"></div> "
				+ "<div class=\"lugins\">"
				+ "<div class=\"secsed\">" 
					+ "<h4 class=\"horario\">HORARIO</h4>"
					+ "<h4 class=\"domi\">Lun-Mier-Vie</h4>"
					+ "<h4 class=\"domi\">Junior 18.30hs a 19.30hs</h4>"
					+ "<h4 class=\"domi\">Infantil 19.30hs a 21hs</h4>"
					+ "<h4>Sede Solano Grupo Esparta</h4>"
				+ "</div>"
			+ "</div>"
			document.getElementById("instructor_actual").innerHTML = text;
			$("#instructor_actual").toggle(750);
		});
			
	});
});
