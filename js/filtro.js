var campoFiltro = document.querySelector("#filtrar-tabela");


campoFiltro.addEventListener("input",

	function(){

		
		var pacientes = document.querySelectorAll(".paciente");
	
	if(this.value.length>0){

				for(var i=0;i<pacientes.length;i++){

					var nome = pacientes[i].querySelector(".info-nome").textContent;
					var expressao = new RegExp(this.value,"i");
					
					if(!expressao.test(nome)){
						pacientes[i].classList.add("hidden");
					}
					else{
						pacientes[i].classList.remove("hidden");
					}
					

				}
	}
	else{
				for(var i=0;i<pacientes.length;i++){

							
						pacientes[i].classList.remove("hidden");
							
							

				}


	}



	}
);


