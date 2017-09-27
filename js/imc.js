alert("olá mundo");
console.log(document.querySelector(".titulo_principal"));
var titulo = document.querySelector(".titulo_principal");
titulo.textContent = "Avaliação Fisica Senai";
console.log(titulo.textContent);


var paciente = document.querySelectorAll(".paciente");


for(var i=0;i<paciente.length;i++){
		
	var tdnome = paciente[i].querySelector(".info-nome");
	var nomePaciente = tdnome.textContent;
	console.log(nomePaciente);

	var tdpeso = paciente[i].querySelector(".info-peso");
	var pesoPaciente = tdpeso.textContent;
	console.log(pesoPaciente);


	var tdaltura = paciente[i].querySelector(".info-altura");
	var alturaPaciente = tdaltura.textContent;
	console.log(alturaPaciente);


	var tdgordura = paciente[i].querySelector(".info-gordura");
	var gorduraPaciente = tdgordura.textContent;
	console.log(gorduraPaciente);

	var tdclassificacao = paciente[i].querySelector(".info-classificacao");
	var classificacaoPaciente = tdclassificacao.textContent;
	console.log(classificacaoPaciente);

	console.log( "O paciente "+ nomePaciente +" possui "+pesoPaciente+" kg e "+alturaPaciente+" de altura");
	var idImc = paciente[i].querySelector(".info-imc");


	var pesoValido=validaPeso(pesoPaciente);
	var alturaValida=validaAltura(alturaPaciente);

	

	if(alturaValida && pesoValido){


		console.log(idImc);

		var imc =  calculaIMC(pesoPaciente,alturaPaciente);
		console.log(imc);
		paciente[i].classList.remove("cor");

		validaClassificacao(imc,tdclassificacao,tdnome);
		

		idImc.textContent= imc;

	}
	else{	
			// idImc.style.color="red";
			idImc.classList.add("invalido");
			idImc.textContent = "Peso ou altura inválida";
			tdclassificacao.textContent = "Peso ou altura inválida";
	}



}

function calculaIMC(peso,altura){

	return (peso / (altura * altura)).toFixed(2);
}



function validaPeso(pesoPaciente){

	if(pesoPaciente<=0 || pesoPaciente>= 500){
		pesoValido=false;
		console.log("Peso Inválido " + pesoValido);

	}
	else{
		pesoValido=true;
		console.log("Peso Valido " + pesoValido);
	}

	return pesoValido;

}


function validaAltura(alturaPaciente){

	if(alturaPaciente<=0 || alturaPaciente>= 3.0){
		alturaValida=false;
		console.log("Altura Inválido " + alturaValida);

	}
	else{
		alturaValida=true;
		console.log("Altura Valido " + pesoValido);

	}


	return alturaValida;

}


function validaClassificacao(imc,tdclassificacao,tdnome){
	

		if(imc<=18.5){
				tdclassificacao.textContent="Desnutrição";
				 tdclassificacao.style.background="violet";
				 tdnome.style.background="red";
				

			} else
			if(imc>=18.5 && imc<=24.9){
				tdclassificacao.textContent="Peso Normal";
				console.log("Peso Normal");
				 tdclassificacao.style.background="lightblue";
				  


			} else
			if(imc>=25.0 && imc <=29.9){
				tdclassificacao.textContent="Pré Obesidade";
				console.log("Pré Obesidade");
				 tdclassificacao.style.background="lightyellow";
				

			} else 
			if(imc>=30 && imc <=34.9){
				tdclassificacao.textContent="Obesidade Grau 1";
				console.log("Obesidade Grau 1");
				 tdclassificacao.style.background="#BBFFFF";
				   
			} else 
			if(imc>=35 && imc <=39.9){
				tdclassificacao.textContent="Obesidade Grau 2";
				console.log("Obesidade Grau 2");
				 tdclassificacao.style.background="lightgreen";
				  
			} else 
			if(imc>40){
				tdclassificacao.textContent="Obesidade Grau 3";
				console.log("Obesidade Grau 3");
				 tdclassificacao.style.background="orange";
				 tdnome.style.background="red";

				   
			}

}