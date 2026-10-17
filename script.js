const container = document.querySelector('.container');
const newGridBtn = document.querySelector('button');

let grid = 16;

newGridBtn.addEventListener('click', () => {
    do {grid = +prompt('Enter a new size of grid: ', '')}while(grid < 1 || grid > 100);
    clearGrid();
    createGrid(grid);
});

function createGrid(grid){

    for(let i = 0; i < grid; i++){
    const lineContainer = document.createElement('div');
    lineContainer.classList.add('lineContainer');

    for(let y = 0; y < grid; y++){
        const block = document.createElement('div');
        block.classList.add('block');
        lineContainer.appendChild(block);

        block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black');
    }


    container.appendChild(lineContainer);
    }
}

function clearGrid(){
    container.replaceChildren();
}
createGrid(grid);