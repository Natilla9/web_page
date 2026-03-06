document.addEventListener("DOMContentLoaded", function(event) {
    
    // 1. Efecto de agrandar/encoger imagen (Thumbnail)
    var thumbnailElement = document.getElementById("smart_thumbnail");
    if (thumbnailElement) {
        thumbnailElement.addEventListener("click", function() {
            if (thumbnailElement.className === "small") {
                thumbnailElement.className = "";
            } else {
                thumbnailElement.className = "small";
            }
        });
    }

    // 2. Saludo del logo con sonido tierno y frases
    const logo = document.querySelector('.logo');
    const miau = document.getElementById('miau-sound');
    
    const frases = [
        "¡Miau! Estás en la página de gatitos de Natalia 🐾",
        "¡Miau! Gracias por visitarnos. 🐾",
        "¿Sabías que los gatos tienen 32 músculos en cada oreja?",
        "¡Purrr... esta página te quiere!",
        "Dato curioso: Los gatos no pueden sentir el sabor dulce."
    ];

    if (logo && miau) {
        miau.volume = 0.5; // Ajustamos el volumen al 50%
        
        logo.addEventListener('click', function() {
            miau.currentTime = 0; // Reinicia el sonido para clics rápidos
            miau.play();
            
            // Elegimos una frase al azar de nuestra lista
            const randomFrase = frases[Math.floor(Math.random() * frases.length)];
            alert(randomFrase);
        });
    }

    // 3. Botón "Volver arriba"
    let btn = document.getElementById("scrollTopBtn");
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };

    if (btn) {
        btn.onclick = function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
    }
});