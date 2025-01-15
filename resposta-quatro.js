// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de 
// representação que cada estado teve dentro do valor total mensal da distribuidora.  

const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;
const estados = [sp , rj , mg , es , outros];
const siglas = ["sp" , "rj" , "mg" , "es" , "outros"];
let total = sp + rj + mg + es + outros;

function buscarPorcentagemPorEstado(valor, total){
    return (valor * 100)/total;
}

console.log('\nPorcentagem por estado:');
estados.forEach((element, index) => {
    const porcentagem = buscarPorcentagemPorEstado(element, total).toFixed(2);
    console.log(`${siglas[index]}: ${porcentagem}%`);
});