
    
    async function loadDestinazioni() {
        try {
            
            const response = await fetch('https://www.freetestapi.com/api/v1/destinations');
            const destinazioni = await response.json(); 

            
            destinazioni.slice(0, 4).forEach((destinazione, index) => {
                
                const card = document.querySelector(`#cd${index + 1}`);
                
                
                if (card) {
                    const img = card.querySelector('.card-img-top');
                    const title = card.querySelector('.card-title');
                    const text = card.querySelector('.card-text');
                    
                    
                    img.src = destinazione.image || 'default-image.jpg';  
                    title.textContent = destinazione.name || 'Destinazione sconosciuta';  
                    text.textContent = destinazione.description || 'Descrizione non disponibile';  
                }
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

