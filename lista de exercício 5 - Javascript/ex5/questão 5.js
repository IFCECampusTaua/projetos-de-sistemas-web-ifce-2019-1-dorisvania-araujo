document.getElementById("botao").addEventListener("click", handleclick, false);

function handleclick(){
	var num1 = document.getElementById("cx1").value;
	var num2 = document.getElementById("cx2").value;
	document.getElementById("mostrarRes").innerHTML = resto(num1, num2);
}

function resto(num1, num2){
	return num1 % num2
}

