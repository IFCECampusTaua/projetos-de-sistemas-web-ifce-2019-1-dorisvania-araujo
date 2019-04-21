function verificar() {
	var campo = document.getElementById("cxtexto");
	var txt   = document.getElementById("cxtexto").value;
	var tam = txt.length;
	if (tam > 0 && tam < 10) {
		document.getElementById("msg").innerHTML = "Insuficiente!";
	}else if (tam > 10 && tam < 14) {
		document.getElementById("msg").innerHTML = "Bom!";
	}else if (tam > 14) {
		document.getElementById("msg").innerHTML = "Muito Bom!";
	}else {
		document.getElementById("msg").innerHTML = "Digite algo!";
	}
}
document.getElementById("botao").addEventListener("click", verificar); 

function limparTexto() {
    document.getElementById("minha forma").reset();
    document.getElementById("msg").innerHTML = "";

}
document.getElementById("btn").addEventListener("click", limparTexto);