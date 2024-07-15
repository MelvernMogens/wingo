document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        "Kapan KMB Dibentuk?", "Siapa Ketua KMB?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?", "Kapan KMB Dibentuk?",
        "Kapan KMB Dibentuk?"
    ];

    const labels = [
        "A1", "A2", "A3", "A4", "A5", "A6", "A7",
        "B1", "B2", "B3", "B4", "B5", "B6", "B7",
        "C1", "C2", "C3", "C4", "C5", "C6", "C7",
        "D1", "D2", "D3", "D4", "D5", "D6", "D7",
        "E1", "E2", "E3", "E4", "E5", "E6", "E7",
        "F1", "F2", "F3", "F4", "F5", "F6", "F7",
        "G1", "G2", "G3", "G4", "G5", "G6", "G7"
    ];

    const bingoBoard = document.getElementById('bingoBoard');
    const gridSize = 7;

    if (questions.length < gridSize * gridSize) {
        console.error('Not enough questions to fill the board.');
        return;
    }

    const shuffledQuestions = questions.sort(() => 0.5 - Math.random()).slice(0, gridSize * gridSize);

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        cell.dataset.question = shuffledQuestions[i];
        cell.dataset.label = labels[i];
        cell.textContent = labels[i];

        cell.addEventListener('click', () => {
            if (cell.classList.contains('revealed')) {
                cell.textContent = cell.dataset.label;
                cell.classList.remove('revealed');
            } else {
                cell.textContent = cell.dataset.question;
                cell.classList.add('revealed');
            }
        });

        bingoBoard.appendChild(cell);
    }

    document.querySelectorAll('.label-field input').forEach(input => {
        input.addEventListener('input', (event) => {
            const label = event.target.dataset.label;
            document.querySelectorAll('.bingo-cell').forEach(cell => {
                if (cell.dataset.label === label && !cell.classList.contains('revealed')) {
                    cell.textContent = event.target.value;
                }
            });
        });
    });
});
