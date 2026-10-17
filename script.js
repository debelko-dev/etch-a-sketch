const container = document.querySelector('.container');


for(let i = 0; i < 16; i++){
    const lineContainer = document.createElement('div');
    lineContainer.classList.add('lineContainer');

    for(let y = 0; y < 16; y++){
        const block = document.createElement('div');
        block.classList.add('block');
        lineContainer.appendChild(block);
    }
    container.appendChild(lineContainer);
}