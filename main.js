
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quais os tres estados mais populosos do Brasil?");

    
    if (respostaTime.toLowerCase() === "São Paulo, Rio de Janeiro e Minas Gerais") {
      alert("Isso mesmo! Esses são os 3 estados mais populosos do Brasil!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
