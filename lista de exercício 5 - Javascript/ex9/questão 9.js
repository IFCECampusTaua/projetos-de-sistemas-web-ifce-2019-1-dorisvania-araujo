var btn = document.getElementById("botao");

btn.addEventListener("click", function() {
  var valorSalario = document.getElementById("salarioAtual").value;
    if (valorSalario <= 280) {
    	var valorAumento = valorSalario * 0.2; 
    	var novoSalario = valorSalario * 1.2;  
    	var arredondado = parseFloat(novoSalario.toFixed(0));
  		document.getElementById("novoSalario").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("salarioAnterior").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("percAumento").innerHTML = "20%";
  		var arredondado = parseFloat(valorAumento.toFixed(0));
  		document.getElementById("aumento").innerHTML = "R$" + " " + arredondado + ",00";

    }else if (valorSalario > 280 && valorSalario <= 700) {
    	var valorAumento = valorSalario * 0.15; 
    	var novoSalario = valorSalario * 1.15;  
    	var arredondado = parseFloat(novoSalario.toFixed(0));
  		document.getElementById("novoSalario").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("salarioAnterior").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("percAumento").innerHTML = "15%";
  		var arredondado = parseFloat(valorAumento.toFixed(0));
  		document.getElementById("aumento").innerHTML = "R$" + " " + arredondado + ",00";

    }else if (valorSalario > 700 && valorSalario <= 1500) {
    	var valorAumento = valorSalario * 0.1;
    	var novoSalario = valorSalario * 1.1;  
    	var arredondado = parseFloat(novoSalario.toFixed(0));
  		document.getElementById("novoSalario").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("salarioAnterior").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("percAumento").innerHTML = "10%";
  		var arredondado = parseFloat(valorAumento.toFixed(0));
  		document.getElementById("aumento").innerHTML = "R$" + " " + arredondado + ",00";

  	}else if (valorSalario > 1500) {

    	var valorAumento = valorSalario * 0.05; 
    	var novoSalario = valorSalario * 1.05;  
    	var arredondado = parseFloat(novoSalario.toFixed(0));
  		document.getElementById("novoSalario").innerHTML = "R$" + " " + arredondado + ",00";
  		document.getElementById("salarioAnterior").innerHTML = "R$" + " " + valorSalario + ",00";
  		document.getElementById("percAumento").innerHTML = "5%";
  		var arredondado = parseFloat(valorAumento.toFixed(0));
  		document.getElementById("aumento").innerHTML = "R$" + " " + arredondado + ",00";
  	}
});