// Dado let precoTexto = "150"; e let quantidade = 3;, escreva o código que calcula o valor total corretamente (convertendo precoTexto para número). Pesquise sobre Number() ou parseInt().

let precoTexto = "150";
let quantidade = 3;
let valorTotal;

valorTotal = quantidade * Number(parseInt(precoTexto));

console.log(valorTotal);