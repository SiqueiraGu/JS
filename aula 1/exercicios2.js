const fristname = 'Gustavo';
const lastname = 'Siqueira';
const years = 18;
const kg = 90;
const lett = 1.80;
let IMC = kg / (lett * lett);
let anoNascimento = 2023 - years;

//template strings

console.log(` ${fristname} ${lastname} tem ${years} anos, pesa ${kg} kg`);
console.log(` Tem ${lett} de altura e seu IMC é de ${IMC}`);
console.log(` ${fristname} nasceu em ${anoNascimento}`);