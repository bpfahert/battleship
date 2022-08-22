

function renderPlayerBoard(array) {
    let playerBoard = document.getElementById('playerboard');
    for (let i = 1; i < 101; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.classList += 'gridSpace';
        gridSpace.setAttribute('data-gridID', i)
                //TODO: WRITE CSS FOR MISS AND HIT (MOVE THIS TO CPU BOARD?)
        if (array[i] === 'hit') {
            gridSpace.textContent = 'hit';
            gridSpace.style.backgroundColor = 'green';
        }
        else if (array[i] === 'miss') {
            gridSpace.textContent = 'miss';
            gridSpace.style.backgroundColor = 'red';
        }
        else if (array[i] === 'empty') {
            gridSpace.style.backgroundColor = 'white';
        }
        else {
            gridSpace.style.backgroundColor = 'grey';
        }
        playerBoard.appendChild(gridSpace);

    }
}

function renderCPUBoard(array) {
    let cpuBoard = document.getElementById('cpuboard');
    for (let i = 1; i < 101; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.classList += 'gridSpace';
        gridSpace.setAttribute('data-cpugridID', i)
        if (array[i] === 'hit') {
            gridSpace.textContent = 'hit';
            gridSpace.style.backgroundColor = 'green';
        }
        else if (array[i] === 'miss') {
            gridSpace.textContent = 'miss';
            gridSpace.style.backgroundColor = 'red';
        }
        else if (array[i] === 'empty') {
            gridSpace.style.backgroundColor = 'white';
        }
        else {
            gridSpace.style.backgroundColor = 'grey';
        }
        cpuBoard.appendChild(gridSpace);
        }
}  

//         gridSpace.addEventListener('click', () => {
//             //check if a ship is there and set space status to hit if so and miss if not (place eventlistener outside of DOM and just call functions??)
//             let spaceState = board.receiveAttack((gridSpace.getAttribute('cpudata-gridX')) , (gridSpace.getAttribute('cpudata-gridY')));
//             if (spaceState === true) {
//                 gridSpace.setAttribute('cpuspacestatus', 'hit');
//                 gridSpace.style.backgroundColor = "red";
//             }
//             else if (spaceState === false) {
//                 gridSpace.setAttribute('cpuspacestatus', 'miss');
//                 gridSpace.style.backgroundColor= "blue";
//             // remove event listener after click to prevent bugs
//             }
//         })

//         cpuBoard.appendChild(gridSpace);
//     }
// }

// function updateCPUBoard(array) {
//     for (let i = 1; i < 101; i++) {
//         let currentGridSpace = document.querySelector(`[cpudata-gridid="${i}"]`);
//         currentGridSpace.setAttribute('cpuspacestatus', `${array[i]}`);
//     }}


export {
    renderPlayerBoard, 
    renderCPUBoard
};