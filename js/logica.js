
function exercicio1(idade){

	var meses = idade*12;
	var dias = idade*365;
	var horas = idade * 8760;
	var minutos = idade * 525600;

	console.log("meses: "+meses+ "\n","dias: "+dias+ "\n","horas: "+horas+ "\n","minutos: "+minutos+ "\n");
}

function exercicio2(anoNascimento,anoAtual){

	var idadeAtual = anoAtual-anoNascimento;
	console.log("A idade atual é "+ idadeAtual+"\n");
	console.log("A quantidade de semanas é de  "+ (idadeAtual*52)+"\n");


}


function exercicio3(nota1,nota2,nota3,nota4){

		var mediaAritmetica=(nota1+nota2+nota3+nota4)/4;

		if(mediaAritmetica>=7){
			console.log("Aluno aprovado com a média "+mediaAritmetica);
		}else{
			console.log("Aluno reprovado com a média"+ mediaAritmetica);
		}
	
}


function exercicio4(salario){

	if(salario<1500){
		salario=salario*1.30;
		console.log(salario);
	}
	else{
		console.log("Funcionário não tem direito a aumento");
	}

}

function exercicio5(idade){
 var categoria;	

	if(idade<=7 && idade >=5){
		categoria="Infantil A";
	}else
	if(idade<=10  && idade >=8){
		categoria="Infantil B"; 
	}else
	if(idade<=13  && idade >=11){
		categoria="Juvenil A";
	}else
	if(idade<=17  && idade >=14){
		categoria="Juvenil B";
	}else
	if(idade>18){
		categoria="Sênior ";
	}
	
	console.log("A categoria do nadador é "+categoria);


}


function exercicio6(preco,codOrigem){

var procedencia;
	
	// if(codOrigem==1){
	// 	procedencia="Sul";
	// }
	// if(codOrigem==2){
	// 	procedencia="Norte";
	// }
	// if(codOrigem==3){
	// 	procedencia="Leste";
	// }
	// if(codOrigem==4){
	// 	procedencia="Oeste";
	// }
	// if(codOrigem==5 || codOrigem==6){
	// 	procedencia="Nordeste";
	// }
	// if(codOrigem==7 || codOrigem==8 || codOrigem==9){
	// 	procedencia="Sudeste";
	// }
	// if(codOrigem>=10 && codOrigem<=20){
	// 	procedencia="Centro-Oeste";
	// }
	// if(codOrigem>=21 && codOrigem<=30){
	// 	procedencia="Sem definição";
	// }


	switch (true) {
	    case (codOrigem==1):
	    				procedencia="Sul";
	    				break;
	    case (codOrigem==2):
	    				procedencia="Norte";
	    				break;
	    case (codOrigem==3):
	    				procedencia="Leste";
	    				break;
	    case (codOrigem==4):
	    				procedencia="Oeste";
	    				break;
	    case (codOrigem==5 || codOrigem==6):
	    				procedencia="Nordeste";
	    				break;
	    case (codOrigem==7 || codOrigem==8 || codOrigem==9):
	    				procedencia="Sudeste";
	    				break;    
	    case (codOrigem>=10 && codOrigem<=20):
	    				procedencia="Centro-Oeste";
	    				break;
	    case (codOrigem>=21 && codOrigem<=30):
	    				procedencia="Sem definição";
	    				break;
	   	default:procedencia="Nenhuma condição foi satisfeita"; 				
   
	}
	
	console.log(procedencia)

}


function exercicio7(idade){
	var classificacao	

	if(idade<=2){
		classificacao="Recém-Nascido"
	}else
	if(idade<=11 && idade >=3){
		classificacao="Criança"
	}else
	if(idade<=19 && idade >=12){
		classificacao="Adolescente"
	}else
	if(idade<=55 && idade >=20){
		classificacao="Adulto"
	}else{
		classificacao="Idoso"
	}

	console.log(classificacao);	

}

function exercicio8(nome,salario,codCargo){

	console.log("Nome "+ nome+"\n"+
				"Salário "+ salario+"\n"+
				"Código do Cargo "+ codCargo+"\n"+
				"Cargo "+ exercicio8Cargo(codCargo)+"\n"+
				"Percentual de aumento "+ exercicio8Percentual(codCargo) +"\n"+
				"Salário com aumento "+ (salario*((exercicio8Percentual(codCargo)+100)/100))
	)


}


function exercicio8Cargo(codCargo){
	var cargo;

	switch (codCargo) {
    case 1:cargo="Escriturário";
     break;
    case 2:cargo="Secretário";
     break;
    case 3:cargo="Caixa";
     break;
    case 4:cargo="Gerente";
     break;
    case 5:cargo="Diretor";
     break;
    default:cargo="Código Cargo Inválido";
     break;
       
	}

return cargo;

}

function exercicio8Percentual(codCargo){
	var percentual;

	switch (codCargo) {
    case 1:percentual=50;
    	   break;
    case 2:percentual=35;
           break;
    case 3:percentual=20;
           break;
    case 4:percentual=10;
           break;
    case 5:percentual=0;
           break;
    default:percentual="Código Cargo Inválido";
            break;
       
	}

return percentual;

}



// var botaoAdicionar = document.querySelector("#adicionar-funcionario");
// console.log(botaoAdicionar);
// botaoAdicionar.addEventListener("click",

// 	function(event){
// 		event.preventDefault();
// 		alert("Fui clicado");



// 	var form=document.querySelector("#formFuncionario");
// 	console.log(form);

// 	var nome= form.nome.value;
// 	var salario= form.salario.value;
// 	var codCargo= form.codCargo.value;
	



	
// 	console.log(nome);
// 	console.log(peso);
// 	console.log(altura);
// 	console.log(gordura);

// 	var pacienteTr=document.createElement("tr");
// 	var nomeTd= document.createElement("td");
// 	var pesoTd= document.createElement("td");
// 	var alturaTd= document.createElement("td");
// 	var gorduraTd= document.createElement("td");
// 	var imcTd= document.createElement("td");
// 	var classificacaoTd= document.createElement("td");


// 	pacienteTr.appendChild(nomeTd);
// 	pacienteTr.appendChild(pesoTd);
// 	pacienteTr.appendChild(alturaTd);
// 	pacienteTr.appendChild(gorduraTd);
// 	pacienteTr.appendChild(imcTd);
// 	pacienteTr.appendChild(classificacaoTd);


// 	nomeTd.textContent=nome;
// 	pesoTd.textContent=peso;
// 	alturaTd.textContent=altura;
// 	gorduraTd.textContent=gordura;
// 	imcTd.textContent=calculaIMC(peso,altura);
// 	classificacaoTd.textContent=verificaClassificacao(imcTd.textContent);

	
// 	var tabela=document.querySelector("#tabela-pacientes");
// 	tabela.appendChild(pacienteTr);


// 	}


// )