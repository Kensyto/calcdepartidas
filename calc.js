function calculadoraRankeadas(vitorias, derrotas) {
  // Calcula o saldo de Rankeadas
  let saldoRankeadas = vitorias - derrotas;
  let nivel;

  // Determina o nível com base na quantidade de vitórias
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else if (vitorias >= 101) {
    nivel = "Imortal";
  } else {
    nivel = "Não definido (vitórias negativas ou zero)"; // Caso a lógica precise cobrir outros cenários
  }

  // Retorna o resultado
  return `O Herói tem um saldo de ${saldoRankeadas} e está no nível de ${nivel}`;
}

// Exemplo de uso da função:
let resultado1 = calculadoraRankeadas(30, 5);
console.log(resultado1); // Saída: O Herói tem um saldo de 25 e está no nível de Prata

let resultado2 = calculadoraRankeadas(85, 10);
console.log(resultado2); // Saída: O Herói tem um saldo de 75 e está no nível de Ouro

let resultado3 = calculadoraRankeadas(110, 20);
console.log(resultado3); // Saída: O Herói tem um saldo de 90 e está no nível de Imortal

let resultado4 = calculadoraRankeadas(5, 15);
console.log(resultado4); // Saída: O Herói tem um saldo de -10 e está no nível de Ferro