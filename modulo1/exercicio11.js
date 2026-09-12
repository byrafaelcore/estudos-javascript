// Dadas as variáveis produto, preco e quantidade, monte uma string com template literals mostrando: "3x Notebook = R$ 9600" (o total deve ser calculado dentro do ${}).

const produto = "Notebook";
const preco = 3200;
const quantidade = 3;

console.log(`Valor total da compra: ${produto} R$${preco * quantidade}`);