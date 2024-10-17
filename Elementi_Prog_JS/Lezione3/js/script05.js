let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

 function salutami(){
    let saluto = "Ciao, Dario";
    
    demo.innerHTML = saluto;
}

btn.addEventListener("click", salutami);
