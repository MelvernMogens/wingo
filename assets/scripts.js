document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        "What is your favorite color?", "What is your dream job?", "What is your favorite food?",
        "Where do you want to travel?", "What is your favorite hobby?", "What is your favorite movie?",
        "What is your favorite book?", "Who is your role model?", "What is your favorite sport?",
        "What is your favorite song?", "What is your favorite animal?", "What is your favorite holiday?",
        "What is your favorite season?", "What is your favorite subject in school?", "What is your favorite video game?",
        "What is your favorite drink?", "What is your favorite dessert?", "What is your favorite TV show?",
        "What is your favorite time of day?", "What is your favorite type of music?", "What is your favorite quote?",
        "What is your favorite superhero?", "What is your favorite type of weather?", "What is your favorite flower?",
        "What is your favorite fruit?", "What is your favorite vegetable?", "What is your favorite smell?",
        "What is your favorite sound?", "What is your favorite taste?", "What is your favorite memory?",
        "What is your favorite thing to do on a rainy day?", "What is your favorite thing to do on a sunny day?",
        "What is your favorite thing to do in the snow?", "What is your favorite thing to do at the beach?",
        "What is your favorite thing to do in the mountains?", "What is your favorite thing to do in the city?",
        "What is your favorite thing to do in the country?", "What is your favorite thing to do in the forest?",
        "What is your favorite thing to do on a road trip?", "What is your favorite thing to do on vacation?",
        "What is your favorite thing to do with friends?", "What is your favorite thing to do with family?",
        "What is your favorite thing to do by yourself?", "What is your favorite type of pizza?",
        "What is your favorite type of ice cream?", "What is your favorite type of sandwich?",
        "What is your favorite type of pasta?", "What is your favorite type of cookie?", "What is your favorite type of cake?",
        "What is your favorite type of pie?"
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
