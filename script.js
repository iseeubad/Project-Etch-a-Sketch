const container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = ''; 
    let squareSize = 600/size;

    for (var i = 0; i<size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.width = `${squareSize}px`;
        cell.style.height = `${squareSize}px`;
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = getRandomColor(); 
        });
        container.appendChild(cell);
    }
}

const sizing = document.querySelector(".size");

function resizeGrid(size) {
    let newSize = parseInt(prompt('Enter the number of squares per side for the new grid (e.g., 16):'), 10);
    if (newSize && newSize > 0) {
        createGrid(newSize);
    } else {
        alert('Please enter a valid number.');
    }
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


sizing.addEventListener('click', resizeGrid);

createGrid(16); // Create initial 16x16 grid