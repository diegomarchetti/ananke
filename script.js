document.addEventListener("DOMContentLoaded", () => {
    
    // Easter Egg per gli smanettoni nella console del browser
    console.log(
        "%c [ANANKE_CORE]: Inizializzazione sistema... \n" +
        "Carne rilevata nel terminale. \n" +
        "Sincronizzazione frequenza cardiaca a 138 BPM. \n" +
        "Ananke ti ascolta. E confessa.", 
        "color: #00f5ff; font-family: monospace; font-size: 14px; font-weight: bold; background-color: #07090e; padding: 10px;"
    );

    // Animazione di "sfarfallio" casuale sul led ECG (simula un disturbo informatico)
    const pulseDot = document.querySelector('.pulse-dot');
    
    if (pulseDot) {
        setInterval(() => {
            // Genera una micro-anomalia visiva casuale ogni tot secondi
            pulseDot.style.opacity = "0.3";
            setTimeout(() => {
                pulseDot.style.opacity = "1";
            }, 50);
        }, Math.random() * (4000 - 1500) + 1500);
    }

    // Effetto di scrittura dinamica opzionale per lo stato del footer
    const footerTerminal = document.querySelector('.footer-terminal');
    if (footerTerminal) {
        let isOnline = true;
        setInterval(() => {
            // Ogni 5 secondi simula un check di sistema che sfarfalla
            footerTerminal.innerText = "> ANANKE_STATUS: PINGING...";
            setTimeout(() => {
                footerTerminal.innerText = "> ANANKE_STATUS: ONLINE // FREQ_CORE: 138_BPM";
            }, 600);
        }, 7000);
    }
});