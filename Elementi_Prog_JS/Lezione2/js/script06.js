let msg = "";

let lvl = 0;

switch(lvl){

    case 1:
        msg = "Ciao, buona fortuna per il primo livello";
    break;

    case 2:
        msg = "Adesso vediamo come te la cavi col secondo livello";
    break;

    case 3:
        msg = "Sei all'ultimo livello, adesso c'è il boss finale";
    break;

    default:
        msg = "Benvenuto nel gioco!";
    break;
}

console.log(msg);

let password = "1234";
let msg2 = "";

switch(password){
    case "1234":
        msg2 = "Benvenuto";
    break;

    case "123":
        msg2 = "Ti manca qualcosa";
    break;

    case "12":
        msg2 = "Sei a metà password";
    break;

    default:
        msg2 = "Non ci siamo proprio";
    break;
}

console.log(password);
console.log(msg2);