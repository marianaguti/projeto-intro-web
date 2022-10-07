const tenista1 = "Maria Esther Bueno"
const grandSlams1 = 7
const alive1 = "false"
const gsWON1 = [ "Wimbledon", 3, "US Open", 4];
console.log(tenista1.toUpperCase(), grandSlams1, alive1, gsWON1)


const tenista2 = "Serena Williams"
const grandSlams2 = 23
const alive2 = "true"
const gsWON2 = [ "Aus Open", 7, "Roland Garros", 3, "Wimbledon", 7, "US Open", 6];
console.log(tenista2.toUpperCase(), grandSlams2, alive2, gsWON2)

const tenista3 = "Martina Navratilova"
const grandSlams3 = 18
const alive3 = "true"
const gsWON3 = [ "Aus Open", 3, "Roland Garros", 2, "Wimbledon", 9, "US Open", 4];
console.log(tenista3.toUpperCase(), grandSlams3, alive3, gsWON3)

const somaGS = grandSlams1 + grandSlams2 + grandSlams3 
const mediaGS = somaGS / 3
console.log (somaGS / 3)

const alives = alive1 && alive2 && alive3;
console.log(alives)