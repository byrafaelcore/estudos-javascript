// Declare uma variável com const e tente reatribuí-la em seguida. Rode o código, leia a mensagem de erro no console do navegador e explique (em um comentário) o que ela significa. Depois corrija, trocando para let onde fizer sentido.


let username = "Isabel";

username = "Taís";

console.log(username);

// TypeError: Assignment to constant variable. --> esse erro significa que foi tentado alterr o valor de um dado constante.