var iniciaApp = function(){
	var muestraAltas = function(){
		$("#secAltaAlumnos").show("slow");
	}
	$("#btnAltas").on("click",muestraAltas);
}

$(document).on("click",iniciaApp);