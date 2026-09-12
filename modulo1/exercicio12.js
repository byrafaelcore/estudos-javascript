// Crie uma "nota fiscal" em texto usando template literals com quebras de linha (dentro da crase dá pra apertar Enter), mostrando nome do cliente, 2-3 produtos com preços e o total geral.

let nomeCliente = "Raíssa";
let produto1 = "refrigerante";
let preco1 = 12;
let produto2 = "Pastel";
let preco2 = 4;

console.log(`NOTA FISCAL
    Cliente: ${nomeCliente}
    Produtos: ${produto1} R$${preco1}, ${produto2} R$${preco2}
    Total: R$${preco1 + preco2}`);