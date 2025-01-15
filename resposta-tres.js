// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const url = "https://drive.google.com/uc?export=download&id=1qXvCPjEL4jerElN-hnScoKkEVmSQ8A2L";

fetch(url)
    .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao carregar o arquivo JSON");
            }
            return response.json();
        }
    ).then(data => {
        calcularFaturamento(data);
    }
).catch(error => {
        console.error("Erro:", error);
    }
);

function calcularFaturamento(faturamentoDiario) {
    const diasValidos = faturamentoDiario.filter(dia => dia.valor > 0);

    if (diasValidos.length === 0) {
        console.log("Nenhum dia válido encontrado.");
        return;
    }

    let menorValor = diasValidos[0].valor;
    let maiorValor = diasValidos[0].valor;

    for (const dia of diasValidos) {
        if (dia.valor < menorValor) {
            menorValor = dia.valor;
        }
        if (dia.valor > maiorValor) {
            maiorValor = dia.valor;
        }
    }
    const somaFaturamento = diasValidos.reduce((soma, dia) => soma + dia.valor, 0);
    const mediaMensal = somaFaturamento / diasValidos.length;

    const diasAcimaDaMedia = diasValidos.filter(dia => dia.valor > mediaMensal).length;

    console.log("Menor valor de faturamento:", menorValor);
    console.log("Maior valor de faturamento:", maiorValor);
    console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);
}
