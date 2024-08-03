document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        "Kapan KMB Dibentuk?", "Berapa hasil dari log10(1000)?", "Siapa penemu bola lampu listrik?",
        "Apa simbol kimia untuk air?", "Apa nama kuda Pangeran Siddharta?", "Berapa Bhikku yang hadir saat Magha Puja?",
        "Apa planet terbesar di tata surya kita?", "Berapa akar dari 6084?", "Berapa sila yang dipegang Bhikku?",
        "Apa yang lebih berat, satu kilogram kapas atau satu kilogram besi?", "Ajaran yang dibabarkan oleh Buddha saat Magha Puja dikenal sebagai?", "Saya memiliki kunci tapi tidak pernah membuka pintu. Siapakah saya?",
        "Apa arti Saddha?", "Jika suhu air 0 derajat Celsius, apakah air tersebut beku atau cair? Jelaskan", "Apa itu Bodhisattva?",
        "Apa yang jatuh tetapi tidak pernah naik?", "Siapa penulis novel 'Harry Potter'?", "Sebutkan Empat Kebenaran Mulia?",
        "Apa itu Nirvana?", "Siapa penemu hukum gravitasi?", "Apa ibukota negara Thailand?",
        "Jika X + 1/X = 3, hitung X^2 + 1/X^2", "Apa itu hukum karma?", "Berapa hasil dari ((29+20)*25+78*99/20-200/34+46*56-34+21/3)*(2813-2813)?", "Unsur Kimia dengan simbol O?",
        "Siapakah yang mengembangkan teori relativitas?", "Apa itu Sangha?", "Saya memiliki banyak gigi tapi tidak bisa menggigit. Siapakah saya?",
        "Apa itu Dukkha?", "Apa nama samudra terbesar di dunia?", "Apa itu Dharma?",
        "Siapa pengarang 'Romeo dan Juliet'?", "Apa yang memiliki kepala, ekor, tapi tidak punya tubuh?", "Tentukan nilai y jika y = 3x + 128, dan x = 23*23",
        "Apa yang tidak bisa digunakan sampai ia dipecahkan?", "Saya punya kota tapi tidak punya rumah. Saya punya gunung tapi tidak punya pohon. Saya punya air tapi tidak punya ikan. Siapakah saya?", "Siapa Pencipta 'Mona Lisa'?",
        "Ubahlah 20% menjadi pecahan.", "Apa itu Dana?", "Saya selalu datang tetapi tidak pernah tiba. Apa saya?",
        "Tentukan median dari data berikut: 3, 7, 9, 5, 4.", "Apa itu Sutra?", "Kapan Indonesia Merdeka?",
        "Saya hidup tanpa bernapas dan dingin dalam kematian. Apakah saya?", "Siapa nama Kusir Pangeran Siddharta?", "Tentukan luas segitiga dengan alas 8 cm dan tinggi 5 cm.",
        "Apa nama ibu kota Jepang?", " Apa yang bisa kamu tangkap tetapi tidak bisa dilempar?",
        "Siapa Ketua KMB?"
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

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('bingo-cell');
        cell.dataset.question = questions[i];
        cell.dataset.label = labels[i];
        cell.dataset.state = 0; // 0: label, 1: question
        cell.textContent = labels[i];

        cell.addEventListener('click', (event) => {
            const currentState = parseInt(cell.dataset.state);
            const groupNames = document.querySelectorAll('.group-name');

            if (event.ctrlKey) {
                const groupIndex = (currentState - 2 + 1) % groupNames.length;
                const groupName = groupNames[groupIndex].value.trim();
                const groupColor = document.querySelectorAll('.group-color')[groupIndex].value;

                cell.textContent = groupName;
                cell.style.backgroundColor = groupColor;
                cell.dataset.state = 2 + groupIndex;
            } else {
                const newState = (currentState + 1) % 2;
                cell.dataset.state = newState;

                if (newState === 0) {
                    cell.textContent = cell.dataset.label;
                    cell.classList.remove('revealed');
                    cell.style.backgroundColor = '';
                } else if (newState === 1) {
                    cell.textContent = cell.dataset.question;
                    cell.classList.add('revealed');
                    cell.style.backgroundColor = '';
                }
            }
        });

        bingoBoard.appendChild(cell);
    }

    document.querySelectorAll('.label-field input').forEach(input => {
        input.addEventListener('input', (event) => {
            const label = event.target.dataset.label;
            document.querySelectorAll('.bingo-cell').forEach(cell => {
                if (cell.dataset.label === label && parseInt(cell.dataset.state) === 0) {
                    cell.textContent = event.target.value;
                }
            });
        });
    });

    document.querySelectorAll('.group-label').forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const label = event.target.value.trim();
            const groupName = document.querySelectorAll('.group-name')[index].value.trim();
            const groupColor = document.querySelectorAll('.group-color')[index].value;

            document.querySelectorAll('.bingo-cell').forEach(cell => {
                if (cell.dataset.label === label) {
                    cell.textContent = groupName;
                    cell.style.backgroundColor = groupColor;
                    cell.dataset.state = 2 + index; // Set state to group index
                }
            });
        });
    });

    document.querySelectorAll('.group-name').forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const groupName = event.target.value.trim();
            const colorInput = document.querySelectorAll('.group-color')[index];
            const color = colorInput.value;

            document.querySelectorAll('.bingo-cell').forEach(cell => {
                if (cell.dataset.label.startsWith(event.target.id[0])) {
                    cell.dataset.group = groupName;
                    if (parseInt(cell.dataset.state) === 2 + index) {
                        cell.style.backgroundColor = color;
                        cell.textContent = groupName;
                    }
                }
            });
        });
    });

    document.querySelectorAll('.group-color').forEach((input, index) => {
        input.addEventListener('input', (event) => {
            const color = event.target.value;
            const groupNameInput = document.querySelectorAll('.group-name')[index];
            const groupName = groupNameInput.value.trim();

            document.querySelectorAll('.bingo-cell').forEach(cell => {
                if (cell.dataset.group === groupName && parseInt(cell.dataset.state) === 2 + index) {
                    cell.style.backgroundColor = color;
                }
            });
        });
    });
});
