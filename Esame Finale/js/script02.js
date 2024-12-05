async function loadDestinazioni() {
    try {
        const response = await fetch('https://www.freetestapi.com/api/v1/destinations');
        const destinazioni = await response.json();

        const destinazioniContainer = document.querySelector("#destinazioni-container");
        

        destinazioni.forEach(destinazione => {
            
            const cardHTML = `
            <div class="col-md-4">
            <div class="card h-100 mb-4">
            <img src="${destinazione.image || 'default-image.jpg'}" class="card-img-top" alt="${destinazione.name}">
            <div class="card-body">
            <h5 class="card-title">${destinazione.name}</h5>
            <p class="card-text">${destinazione.description}</p>
            </div>
            <div class="card-body text-center">
                <a href="paginaViaggio.html" class="btn btn-primary" data-destinazione-id="${destinazione.id}">Visualizza il viaggio</a>
                        </div>
                    </div>
                </div>
            `;

            destinazioniContainer.innerHTML += cardHTML;
        });

        const buttons = document.querySelectorAll(".btn-primary");
        buttons.forEach(button => {
            button.addEventListener("click", function(event) {
                const destinazioneId = event.target.getAttribute("data-destinazione-id");
                console.log(destinazioneId);
                
                const destinazioneSelezionata = destinazioni.find(dest => dest.id == destinazioneId)
                console.log(destinazioneSelezionata);
                
                
                 if (destinazioneSelezionata) {
                     localStorage.setItem("destinazioneSelezionata", JSON.stringify(destinazioneSelezionata));
                 }
            });
        });

    } catch (error) {
        console.error("Errore durante il caricamento delle destinazioni:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadDestinazioni);

