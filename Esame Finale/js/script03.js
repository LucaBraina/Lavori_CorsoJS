document.addEventListener("DOMContentLoaded", function() {
   
    const destinazioneSelezionata = JSON.parse(localStorage.getItem("destinazioneSelezionata"));

    if (destinazioneSelezionata) {
       
        document.getElementById("destinazione-nome").textContent = destinazioneSelezionata.name;
       
        document.getElementById("destinazione-descrizione").textContent = destinazioneSelezionata.description;
        document.getElementById("destinazione-immagine").src = destinazioneSelezionata.image || 'default-image.jpg';
        document.getElementById("destinazione-attrazioni").textContent = destinazioneSelezionata.top_attractions;
        document.getElementById("destinazione-piatti").textContent = destinazioneSelezionata.local_dishes;
        document.getElementById("destinazione-attivita").textContent = destinazioneSelezionata.activities;
        

    } else {
        
        alert("Destinazione non trovata.");
    }
});

function validateForm() {
    let valid = true;

    // Reset errors
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => field.innerHTML = '');

    // Nome del viaggio
    const nomeViaggio = document.getElementById('nome_viaggio').value;
    if (!nomeViaggio) {
        document.getElementById('nome_viaggio_error').innerText = "Il nome del viaggio è obbligatorio.";
        valid = false;
    }

    // Data del viaggio
    const dataViaggio = document.getElementById('data_viaggio').value;
    const today = new Date().toISOString().split('T')[0];
    if (!dataViaggio || dataViaggio < today) {
        document.getElementById('data_viaggio_error').innerText = "La data del viaggio deve essere futura.";
        valid = false;
    }

    // Importo
    const importo = document.getElementById('importo').value;
    if (importo <= 0) {
        document.getElementById('importo_error').innerText = "L'importo deve essere un numero positivo.";
        valid = false;
    }

    // Nome completo
    const nome = document.getElementById('nome').value;
    if (!nome) {
        document.getElementById('nome_error').innerText = "Il nome completo è obbligatorio.";
        valid = false;
    }

    // Email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email_error').innerText = "L'email inserita non è valida.";
        valid = false;
    }

    // Numero carta di credito
    const numeroCarta = document.getElementById('numero_carta').value;
    const cartaPattern = /^[0-9]{16}$/;
    if (!cartaPattern.test(numeroCarta)) {
        document.getElementById('numero_carta_error').innerText = "Il numero della carta deve essere di 16 cifre.";
        valid = false;
    }

    // Data di scadenza
    const dataScadenza = document.getElementById('data_scadenza').value;
    const scadenzaPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!scadenzaPattern.test(dataScadenza)) {
        document.getElementById('data_scadenza_error').innerText = "La data di scadenza deve essere nel formato MM/AA.";
        valid = false;
    }

    // CVV
    const cvv = document.getElementById('cvv').value;
    const cvvPattern = /^[0-9]{3}$/;
    if (!cvvPattern.test(cvv)) {
        document.getElementById('cvv_error').innerText = "Il CVV deve essere di 3 cifre.";
        valid = false;
    }

    return valid;
}
