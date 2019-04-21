function gerarNumero(){ 
	var numero = Math.floor((Math.random() * 50) + 1);
	document.getElementById("mostrarNum").innerHTML = numero;
}

document.getElementById("botao").addEventListener("click", gerarNumero);