




function salutaQualcuno(nome, cognome){
    let saluto = `Ciao ${nome} ${cognome}`;

    console.log(saluto);
}

//salutaQualcuno("Dario", "Mennillo");
//salutaQualcuno("Anna", "Rossi");

let nomi = ["Anna", "Marco", "Luca"];
let cognomi = ["Rossi", "Bianchi", "Verdi"];

for(let i = 0; i < nomi.length; i++);
    salutaQualcuno(nomi[i], cognomi[i]);

