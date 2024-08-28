const container = document.querySelector(".container");

function CreateGrid(size) {
    container.innerHTML = ''; 
    let squareSize = 960/size;

    for (var i = 0; i<size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
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