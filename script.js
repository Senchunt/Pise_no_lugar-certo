 
rodada = 1
while (rodada <= 3) {
  console.log("Rodada: " + rodada);
  
  let escolhaJogador;
  
// loop para garantir que o jogador escolha um número válido.
  do {
  escolhaJogador = parseInt(prompt("Nivel "+rodada+", vidro (1, 2 ou 3)?"), 10);
  } while (isNaN(escolhaJogador) || escolhaJogador < 1 || escolhaJogador > 3); 
  
  pisoQuebrado = Math.floor(Math.random()*3) + 1;
  
  if(escolhaJogador == pisoQuebrado) {
    // escolheu o vidro que estava quebrado
    alert("Vidro quebrou! Acabou o jogo para você!")
    rodada = 1000;
  }
  else {
    alert("Passou! O piso quebrado estava na ponte: " + pisoQuebrado)
  }

  // importante: esta leitura tem de ser feita no final - Ela faz o CONTROLE DO LAÇO - LOOPING
  rodada = rodada + 1
}

// parou aqui quando rodada >=4

if(rodada == 4) {
  alert("Parabéns! Voce conseguiu passa para a próxima fase!")

}
