var campo1;
var campo2;

campo1.addEventListener("click", function() {
  var valorX = document.getElementById("num1").value;
}

campo2.addEventListener("click", function() {
  var valorY = document.getElementById("num2").value;
}

function exibirResto(num1, num2){
	var resto = valorX % valorY;
	return resto;

	document.getElementById("mostrarRes").innerHTML = resto;
}

document.getElementById("botao").addEventListener("click", exibirResto);
