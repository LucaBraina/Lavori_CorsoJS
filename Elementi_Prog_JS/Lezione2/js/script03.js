for(let i = 5; i >= 1; i--){
    console.log(i);
}


for(let i = 2; i <= 20; i++){

    if(i % 5 == 0){
        console.log(i + " QUA");
    }else{
        console.log(i);
    }

    
}

let partecipanti = ["Sig. Rossi,", "Sig. Bruno,", "Sig. Pablo,", "Sig. Motta,"];

for(let i = 0; i < partecipanti.length; i++){
    console.log("Egregio " + partecipanti[i] + " di seguito confermate la vostra partecipazione" );
}

for(let i = 1; i <= 100; i++){

    if((i % 3 == 0) && (i % 5 == 0)){
        console.log(i + " ZOOMVROOM");
    }else if(i % 3 == 0){
        console.log(i + " ZOOM");
    }else if(i % 5 == 0){
        console.log(i + " VROOM");
    }else{
        console.log(i);
    }

}