document.getElementById("revealBtn").addEventListener("click", function() {
    // Oculta o conteúdo principal da página e mostra apenas a contagem regressiva
    document.querySelector(".container").style.display = "none";
    document.getElementById("countdown").style.display = "block";

    // Inicia a contagem regressiva
    startCountdown();
});

function startCountdown() {
    const countdownElement = document.getElementById("countdown");
    let timeLeft = 10;

    // Exibe a contagem regressiva
    countdownElement.textContent = timeLeft + "s";

    const interval = setInterval(function() {
        timeLeft--;
        countdownElement.textContent = timeLeft + "s";

        if (timeLeft < 0) {
            clearInterval(interval);

            // Gera um valor aleatório para "menino" ou "menina"
            const isBoy = Math.random() < 0.5;

            // Altera a cor de fundo dependendo do sexo
            if (isBoy) {
                document.body.style.backgroundColor = "#55c1eb"; // Azul
            } else {
                document.body.style.backgroundColor = "#f5a1d1"; // Rosa
            }

            // Oculta a contagem regressiva após terminar
            countdownElement.style.display = "none";
        }
    }, 1000); // Atualiza a cada segundo
}
