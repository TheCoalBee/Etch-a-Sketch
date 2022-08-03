let grid = document.getElementById('grid');
let enterBtn = document.getElementById('enter-btn');
let inputForm = document.getElementById('size-input');
let resetBtn = document.getElementById('reset-btn');
let halloweenColors = ["orange", "black", "purple", "limegreen"];
let christmasColors = ["red", "green", "gold", "blue", "gray"];
let gridCell;

function randomColor(palette) {
    let max = palette.length;
    let i = Math.floor(Math.random() * (max-0 + 1) + 0);
    return palette[i];
}

function createGrid(width) {
    if (width < 1 || width > 100) {
        width = 1;
    }
    for (let i  = 0; i < width; i++) {
        let row = document.createElement('div');
        grid.appendChild(row);
        row.classList.add("rowStyle");
        for (let j = 0; j < width; j++) {
            let cell = document.createElement('div');
            row.appendChild(cell);
            cell.classList.add("cellStyle");
        }
    }
    gridCell = document.querySelectorAll('.cellStyle');
}

function removeGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    
}


function resetGrid() {
    gridCell.forEach(cell => {
        cell.style.backgroundColor = '';
    })
}

createGrid("12");

// Event listeners

resetBtn.addEventListener('click', resetGrid);

enterBtn.onclick = () => {
    removeGrid();
    createGrid(inputForm.value);
    inputForm.value = "";
}

grid.onmousedown = () => {
    document.body.style.cursor = "none";
    gridCell.forEach(cell => {
        cell.onmouseover = () => {
            cell.style.backgroundColor = "black";
        }
        cell.onclick = () => {
            cell.style.backgroundColor = "black";
        }
    })
}
grid.onmouseover = () => {
    grid.style.userSelect = "none";
    grid.style.cursor = "none";
}
grid.onmouseup = () => {
    document.body.style.cursor = "default";
    gridCell.forEach(cell => {
        cell.onmouseover = () => {
        }
    })
}
grid.onmouseleave = () => {
    document.body.style.cursor = "default";
    gridCell.forEach(cell => {
        cell.onmouseover = () => {
        }
    })
}