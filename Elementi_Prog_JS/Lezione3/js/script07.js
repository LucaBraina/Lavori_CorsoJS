let demo = document.getElementById("demo");
let btnAdd = document.getElementById("btnAdd");
let btnSott = document.getElementById("btnSott");
let btnMolt = document.getElementById("btnMolt");
let btnDiv = document.getElementById("btnDiv");
let btnReset = document.getElementById("btnReset");



function faiAddizione(numero1,numero2){
    let addizione = `La somma dei numeri scelti è ${numero1 + numero2}`;
    return addizione;
}

btnAdd.addEventListener("click", function(){
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    demo.innerHTML += "<h2>" + faiAddizione(num1,num2) + "</h2>"
   
})

function faiSottrazione(numero1,numero2){
    let sottrazione = `La differenza dei numeri scelti è ${numero1 - numero2}`;
    return sottrazione;
}

btnSott.addEventListener("click", function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    demo.innerHTML += "<h2>" + faiSottrazione(num1,num2) + "</h2>"
   
})

function faiMoltiplicazione(numero1,numero2){
    let moltiplicazione = `Il prodotto dei numeri scelti è ${numero1 * numero2}`;
    return moltiplicazione;
}

btnMolt.addEventListener("click", function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    demo.innerHTML += "<h2>" + faiMoltiplicazione(num1,num2) + "</h2>"
   
})

function faiDivisione(numero1,numero2){
    let divisione = `Il quoziente dei numeri scelti è ${numero1 / numero2}`;
    return divisione;
}

btnDiv.addEventListener("click", function(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    demo.innerHTML += "<h2>" + faiDivisione(num1,num2) + "</h2>"
   
})

function faiReset(numero1,numero2){
    let reset = " ";
    return reset
}

btnReset.addEventListener("click", function(){
    let num1 = document.getElementById("num1").value = " ";
    let num2 = document.getElementById("num2").value = " ";

    demo.innerHTML = faiReset(num1,num2)

})