document.getElementById("contactForm").addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value;
    const cognome = document.getElementById("cognome").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const messaggio = document.getElementById("messaggio").value;

    
    if (!nome || !cognome || !email || !telefono || !messaggio) {
        event.preventDefault(); 
        alert("Per favore, compila tutti i campi richiesti.");
    }
});