function updateCountdown() {
    const birthday = new Date('2025-03-11T18:00:00'); // Data do aniversário
    const now = new Date();
    const timeDiff = birthday - now;

    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convertendo para dias

    const countdownElement = document.getElementById('countdown');
    if (daysLeft > 0) {
        countdownElement.textContent = `${daysLeft} dias até o meu aniversário!`;
    } else {
        countdownElement.textContent = 'É o meu aniversário hoje! 🎉';
    }
}

// Atualiza o contador a cada dia
updateCountdown();
