// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

let palavra = 'target';

function inverterTexto(texto) {
    let invertido = "";

    let i = texto.length - 1;
    while (i >= 0) {
        invertido += texto[i];
        i--;
    }

    return invertido;
}

console.log(inverterTexto(palavra));
