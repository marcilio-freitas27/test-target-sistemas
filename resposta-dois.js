// 2) Dado a sequência de Fibonacci, onde se inicia por
//  0 e 1 e o próximo valor sempre será a soma dos 2 
//  valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
//  escreva um programa na linguagem que desejar onde, 
//  informado um número, ele calcule a sequência de Fibonacci e 
//  retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

let resultado = (numero)=>{
    let sequencia = [0, 1];

    for (let indice = 2; sequencia[indice - 1] < numero; indice++) {
        sequencia[indice] = sequencia[indice - 1] + sequencia[indice - 2];
    }

    let retorno = sequencia.includes(numero) ? `${numero} pertence à sequência.` : `${numero} Não pertence à sequência.`;

    return retorno;
}

// Pertence / Não pertence
console.log(resultado(10) + '\n' + resultado(34));
