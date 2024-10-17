let numeri = []; //estratti
let numGiri= 0;

for(let i = 0 ; i < 6; i++){
    let numCasuale = Math.ceil(Math.random() * 90); //numero casuale

    if(numeri.includes(numCasuale)){
        i--;

    }else{
        numeri.push(numCasuale);
    }

    numGiri++;

    console.log(numeri);
    console.log("Ho utilizzato " + numGiri + " giri");


}

//Stessa estrazione senza if

let setNumeri = [];

//for per riempire il set di numeri
for(let i = 0; i<90; i++){
    setNumeri.push(i+1);
}

console.log(setNumeri);

let numeriEstratti = [];

for(let i = 0; i < 6; i++){
    let indiceCasuale = Math.ceil(Math.random() * setNumeri.length);

    numeriEstratti.push(setNumeri[indiceCasuale]);


    setNumeri.splice(indiceCasuale, 1);
}

console.log(numeriEstratti);