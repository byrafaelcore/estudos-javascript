// Compare 10 == "10", 10 === "10", 0 == false e null == undefined no console. Anote em comentários o resultado de cada uma e tente explicar o porquê.

console.log(10 == "10"); // true --> compara o valor mas não o tipo
console.log(10 === "10"); // false --> compara o tipo e o valor
console.log(0 == false); // true --> 0 é a ausência de um valor
console.log(null == undefined); // true --> ambos são valores que armazenam nada
