var entTexto = document.getElementById("caixa1");

window.onclick = function(evento) {
	if (evento.target == entTexto) {
		alert("Primeira caixa ativada.");
	}else{alert("Perdeu o foco.");}
}