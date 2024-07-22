// Declarando a função de sortear numeros

function sortear() {
  let quant = parseInt(document.getElementById("quantidade").value);
  let start = parseInt(document.getElementById("de").value);
  let final = parseInt(document.getElementById("ate").value);
  let sorted = [];
  let number;

  if (start >= final) {
    alert("Reveja os campos, 'Do número' é maior que 'Até o número'");
    return;
  }
  
  // Verifica se possivel gerar a quantidade de numeros 
  let intervalo = final-start;

  if(quant>intervalo){
    alert(`Quantidade de números é maior que a possibilidade de números para sorteio de ${start} até ${final}. Tente novamente!`);
    return;

  }

  for (let i = 0; i < quant; i++) {
    number = sortedNumber(start, final);

    // Para não puxar números repetidos
    while (sorted.includes(number)) {
      number = sortedNumber(start, final);
    }
    sorted.push(number);
  }

  // Para não "fugir" do style, usando toda a estrutura do html concatenando os valores sorteados
  let finalText = document.getElementById("resultado");
  finalText.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorted} </label>`;
  changeButtonStatus();
}

// Sorteando os valores com um minimo e um maximo
function sortedNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Verifica a classe do botao "reinicar" e troca ela se estiver desabilitado
function changeButtonStatus() {
  let button = document.getElementById("btn-reiniciar");
  if (button.classList.contains("container__botao-desabilitado")) {
    button.classList.remove("container__botao-desabilitado");
    button.classList.add("container__botao");
  } else {
    button.classList.remove("container__botao");
    button.classList.add("container__botao-desabilitado");
  }
}

// Limpando os campos de digitação do usuário
function reiniciar() {
  document.getElementById("quantidade").value = "";
  document.getElementById("de").value = "";
  document.getElementById("ate").value = "";
  document.getElementById(
    "resultado"
  ).innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora </label>`;
  changeButtonStatus();
}
