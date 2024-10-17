// operatori di confronto -> producono un boolean

let num1 = 3;
let num2 = 3;

let valutazione = (num1 == num2);
console.log(valutazione);

let num3 = "4";
let num4 = 4;
console.log(num3 == num4); //TRUE
console.log(num3 === num4); //FALSE

let num5 = 5;
let num6 = 6;

console.log(num5 != num6); //TRUE
console.log(num5 > num6); //FALSE
console.log(num5 < num6); //TRUE
console.log(num5 >= num6); //FALSE
console.log(num5 <= num6); //TRUE

// operatori di confronto logico -> AND logico (2 su 2 devono essere vere per dare TRUE) - OR logico (basta 1 delle 2 che sia vera per dare TRUE)

