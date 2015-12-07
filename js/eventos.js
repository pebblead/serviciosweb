var iniciaApp = function(){
	var muestraAltas = function(){
		$("#secAltaAlumnos").toggle("slow");

	}
	var muestraBajas = function(){
		$("#secBajaAlumnos").show("slow");
	}
	var GuardaAltaAlumnos = function(){
		var ncontrol = $("txtNumControl").val();
		var nombres= $("txtNombres").val();
		var apellidop= $("txtApellidoPat").val();
		var apellidom= $("txtApellidoMat").val();
		var clavecarrera= $("txtClaveCarrera").val();
		var semestre= $("txtSemestre").val();
		var promedio= $("txtPromedio").val();
		var estatus $("txtEstatus").val();

		var parametros= "orden=GuardaAltaAlumnos"+
		"&ncontrol="+ncontrol+
		"&nombres="+nombres+
		"&apellidopaterno="+apellidop+
		"&apellidomaterno="+apellidom+
		"&clavecarrera="+clavecarrera+
		"&semestre="+semestre+
		"&promedio="+promedio+
		"&estatus="+estatus;

		$.ajax({
			cache: false,
			type: "POST",
			dataType: "json",
			url: "datos/validaEntrada.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true)
				{
					$(".entradaUsuario").hide("slow");
					$("nav").show("slow");
				}
				else
				{
					$(".entradaUsuario > input").val("");
					$("#txtUsuario").focus();
					alert("Usuario o contraseña incorrectos");
				}
			},
			error: function(xhr,ajaxOptions,throws){
				console.log("Error de conexión");
			}
		});

	}
	$("#btnAltas").on("click",muestraAltas);
	$("frmAltaAlumnos").on("submit",GuardaAltaAlumnos);
	$("#btnBajas").on("click",muestraBajas);

}

$(document).on("ready",iniciaApp);