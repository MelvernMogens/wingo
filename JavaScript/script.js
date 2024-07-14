document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.bingo-board');

    // Sample questions array
    const questions = [
        "Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7",
        // Add more questions as needed
    ];

    // Create 7x7 grid
    for (let i = 0; i < 49; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;  // For reference in click handler
        board.appendChild(cell);

        cell.addEventListener('click', () => {
            revealQuestion(cell, i);
        });
    }

    function revealQuestion(cell, index) {
        if (!cell.classList.contains('revealed')) {
            cell.classList.add('revealed');
            cell.textContent = questions[index % questions.length];  // Simple wrap-around for demo
        }
    }
});
