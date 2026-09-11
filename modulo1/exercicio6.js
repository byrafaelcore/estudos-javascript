// Crie três variáveis simulando dados vindos de um formulário HTML (que sempre chegam como string): "25" (idade), "true" (aceitou termos) e "9.90" (preço). Converta cada uma para o tipo correto (number, boolean, number) e comprove com typeof.

let idade = "25";
let termosAceitos = "true";
let preco = "9.90";

termosAceitos = termosAceitos === true;
idade = Number(idade);
preco = Number(preco);

console.log(typeof idade, typeof termosAceitos, typeof preco);