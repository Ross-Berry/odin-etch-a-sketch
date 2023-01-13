const container = document.querySelector('.container');
const button = document.querySelector('button');
let rows = 16;
let cols = 16;

button.addEventListener('click', (e) => {
    const squares = Number.parseInt(prompt('Please enter the number of squares per side for the new grid', '16'));

    if (squares <= 100) {
        rows = squares;
        cols = squares;
        container.innerHTML = '';
        makeGrid(rows, cols);
    } else {
        alert("Total number of squares per side entered cannot be greater than 100");
    }
})

function makeGrid(rows, cols) {
    for (let i = 0; i < (rows * cols); i++) {
        let item = document.createElement('div');
        item.style.width = `${800/rows}px`;
        item.style.height = `${800/cols}px`;
        item.addEventListener('mouseenter', draw);
        container.appendChild(item).className = 'item';
    }
}

function draw(e) {
    e.target.classList.add('shaded');
}

makeGrid(rows, cols);