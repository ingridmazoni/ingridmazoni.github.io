var pacientesR= document.querySelectorAll(".paciente")

pacientesR.forEach(

	function(paciente){


		paciente.addEventListener(
			"dblclick",

			function(event){
				event.target.parentNode.classList.add("fadOut");
				setTimeout(
					function(){
						event.target.parentNode.remove();
					},1500
				);

			

			}


		)




	}



)