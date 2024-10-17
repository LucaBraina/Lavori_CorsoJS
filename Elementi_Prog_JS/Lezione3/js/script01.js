//Dichiaro una funzione

function saluta(){
    //corpo della funzione
    let nome = "Dario"; //variabile locale

    console.log("Ciao " + nome);
}

//Richiamo la funzione altrimenti non appare
saluta();

//console.log(nome); //undefined perchè Dario è locale

let nome = "Anna"; //variabile globale
console.log(nome); 

//variabili globali
let numeroStudenti = 10;

function contaStudenti(){ //aggiorna una variabile globale
    numeroStudenti = 9;
}

contaStudenti(); //prima aggiorno, poi leggo
console.log("In classe ci sono " + numeroStudenti + " studenti");

//indipendenza tra dichiarazione e richiamo di una funzione -> si può richiamare dove si vuole nello script

function calcolaMultipliDi2(){
    let numeri = [2,7,4,5,9,88,1];

    analizza(arrayDiNumeri); //posso richiamare una funzione dentro l'altra

    for(let i=0; i < numeri.length; i++){
        if(numeri[i] % 2 == 0){
            console.log(numeri[i] + " è un multiplo di 2");
        }else{
            console.log(numeri[i]);
        }
    }
}

function analizza(arrayDiNumeri){
    for(let i=0; i < arrayDiNumeri.length; i++){
        if(arrayDiNumeri[i] % 2 == 0){
            console.log(arrayDiNumeri[i] + " è un multiplo di 2");
        }else{
            console.log(arrayDiNumeri[i]);
        }
    }
}

