// Função criada em um arquivo externo que mostra uma mensagem.

function mostrarMsg(){
	alert("Olá Mundo");
}
// captura o elemento com o id "btn" (botão) e, ao clicá-lo, executará a função "imprimirMsg"
document.getElementById("botao").addEventListener("click", mostrarMsg); // "click" em vez de "onclick"