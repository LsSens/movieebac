function createConfetti() {
    const confettiContainer = document.getElementById('confetti-container');

    // Definir cores dos confetes
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#F4FF33', '#33FFF2'];

    for (let i = 0; i < 100; i++) { // Número de confetes
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        // Posicionamento aleatório
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]; // Cor aleatória
        confetti.style.animationDuration = Math.random() * 1 + 1 + 's'; // Duração da animação

        confettiContainer.appendChild(confetti);

        // Remover confete após a animação
        confetti.addEventListener('animationend', () => {
            confettiContainer.removeChild(confetti);
        });
    }
}

// Chamar a função a cada 0.5 segundos
setInterval(createConfetti, 500);
