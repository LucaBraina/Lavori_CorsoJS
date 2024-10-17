function saluta(){
    console.log("Ciao utente!");
}

//recupero il pulsante
let btn = document.getElementById("btn");

//aggancio la funzione all'evento onclick senza le parentesi tonde
// btn.onclick = saluta; //metodo vecchio anche questo

btn.addEventListener("click", saluta); //metodo nuovo che si usa sempre

