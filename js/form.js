
var botaoAdicionar = document.querySelector("#adicionar-paciente");
console.log(botaoAdicionar);
botaoAdicionar.addEventListener("click",

	function(event){
		event.preventDefault();
		alert("Fui clicado");



	var form=document.querySelector("#formPaciente");
	console.log(form);

	

	var paci=retornaPaciente(form);
	console.log(paci);
	var erros=[];


				if(validaPeso(paci.peso)==true && validaAltura(paci.altura) == true){
					var tabela=document.querySelector("#tabela-pacientes");
					tabela.appendChild(retornaPacienteTr(paci));
				}
				else{
					var msg=document.querySelector("#msgErro");	

					if(validaPeso(paci.peso)==false){
						
						erros.push("Peso inválido")

					}

					if(validaAltura(paci.altura)==false){
					
						erros.push("Altura Inválida");
					}

								
					exibeMensagensErro(erros);
					erros.length=0;
					

					
				}

			form.reset();	
	}



)



function retornaPaciente(form){
	var paci={
				nome: form.nome.value,
				peso: form.peso.value,
				altura: form.altura.value,
				gordura:form.gordura.value,
				imc:calculaIMC(form.peso.value,form.altura.value)
				// classificacao:verificaClassificacao(imc)
	}

	return paci;


}


function retornaPacienteTr(paci){

	var pacienteTr=document.createElement("tr");
		pacienteTr.classList.add("paciente");
	var nomeTd= document.createElement("td");
		nomeTd.classList.add("info-nome");
	var pesoTd= document.createElement("td");
		pesoTd.classList.add("info-peso");
	var alturaTd= document.createElement("td");
		alturaTd.classList.add("info-altura");
	var gorduraTd= document.createElement("td");
		gorduraTd.classList.add("info-gordura");
	var imcTd= document.createElement("td");
		imcTd.classList.add("info-imc");
	var classificacaoTd= document.createElement("td");
		classificacaoTd.classList.add("info-classificacao");


	pacienteTr.appendChild(nomeTd);
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);
	pacienteTr.appendChild(classificacaoTd);


	nomeTd.textContent=paci.nome;
	pesoTd.textContent=paci.peso;
	alturaTd.textContent=paci.altura;
	gorduraTd.textContent=paci.gordura;
	imcTd.textContent=paci.imc;
	validaClassificacao(imcTd.textContent,classificacaoTd,nomeTd);


	return pacienteTr;

}

function exibeMensagensErro(erros){

	var ul = document.querySelector("#mensagemErro");

	erros.forEach(
		function(erro){
			ul.innerHTML="";
			var li= document.createElement("li");
			ul.appendChild(li);
			li.textContent=erro;


		}




	)

}




