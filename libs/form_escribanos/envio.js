var jefform = jQuery.noConflict();
jefform(document).ready(function(){
	jefform("#btn-escribanos").click(function() {
		
		var nombre = jefform("#esc_nombre").val();
			email = jefform("#esc_email").val();
			mensaje = jefform("#esc_mensaje").val();
			validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
		
			jefform("input.radio").click(function() { 
				mensaje_tipo=jefform(":checked").val();
			});

		if (nombre == "") {
		    jefform("#esc_nombre").focus();
		    return false;
		}else if(email == "" || !validacion_email.test(email)){
		    jefform("#esc_email").focus();
		    return false;
		}else if(mensaje == ""){
		    jefform("#esc_mensaje").focus();
		    return false;
		}else {
			jefform('#progressbar').removeClass('ocultar');
			var datos = 'nombre='+ nombre + 
						'&email='+ email + 
						'&mensaje_tipo='+ mensaje_tipo + 
						'&mensaje='+ mensaje;
			jefform.ajax({
	    		type: "POST",
	    		url: "libs/form_escribanos/envio.php",
	    		data: datos,
	    		success: function() {
					jefform('#progressbar').hide();
					jefform('.contac_msj').slideUp(1500).show();
					jefform('form').slideUp(1500).show;
					jefform('#msj_enviado').slideDown(2000).show();
	    		},
				error: function() {
					jefform('#progressbar').hide();
					jefform('#msj_enviado').slideDown(1000).show();				
				}
	   		});
	 		return false;	
		}
	});
});