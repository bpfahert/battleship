

function renderPlayerBoard() {
    let playerBoard = document.getElementById('playerboard');
    for (let i = 1; i < 101; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.classList += 'gridSpace';
        gridSpace.setAttribute('data-gridID', i)
        //set to '' only if initializing, add switch case instead of if?
        if (gridSpace.hasAttribute('spaceStatus') === false) {
            gridSpace.setAttribute('spaceStatus', '');
        }
        else if (gridSpace.getAttribute('spaceStatus') === 'miss') {
            gridSpace.textContent = 'miss';
        }
        else if (gridSpace.getAttribute('spaceStatus') === 'hit') {
            gridSpace.textContent = 'hit';
        }
        else if (gridSpace.getAttribute('spaceStatus') === 'ship') {
            gridSpace.style.backgroundColor = 'grey';
        }
        playerBoard.appendChild(gridSpace);

    }
}

function renderCPUBoard(board) {
    let cpuBoard = document.getElementById('cpuboard');
    let xCount = 1;
    let yCount = 1;
    let yValue = 1;
    for (let i = 1; i < 101; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.classList += 'gridSpace';
        gridSpace.setAttribute('cpudata-gridID', i);
        //set to '' only if initializing, add switch case instead of if?
        if (gridSpace.hasAttribute('cpuspacestatus') === false) {
            gridSpace.setAttribute('cpuspacestatus', '');

        }
        else if (gridSpace.getAttribute('cpuspacestatus') === 'miss') {
            gridSpace.textContent = 'miss';
        }
        else if (gridSpace.getAttribute('cpuspacestatus') === 'hit') {
            gridSpace.textContent = 'hit';
        }

        if (xCount < 11) {
            gridSpace.setAttribute('cpudata-gridX', xCount);
            xCount += 1;
        }
        else {
            xCount = 1;
            gridSpace.setAttribute('cpudata-gridX', xCount);
            xCount += 1;
        }

        if (yCount < 11) {
            gridSpace.setAttribute('cpudata-gridY', yValue);
            yCount += 1;
        }
        else {
            yValue += 1;
            gridSpace.setAttribute('cpudata-gridY', yValue);
            yCount = 2;
        }



        gridSpace.addEventListener('click', () => {
            //check if a ship is there and set space status to hit if so and miss if not (place eventlistener outside of DOM and just call functions??)
            let spaceState = board.receiveAttack((gridSpace.getAttribute('cpudata-gridX')) , (gridSpace.getAttribute('cpudata-gridY')));
            if (spaceState === true) {
                gridSpace.setAttribute('cpuspacestatus', 'hit');
                gridSpace.style.backgroundColor = "red";
            }
            else if (spaceState === false) {
                gridSpace.setAttribute('cpuspacestatus', 'miss');
                gridSpace.style.backgroundColor= "blue";
            // remove event listener after click to prevent bugs
            }
        })

        cpuBoard.appendChild(gridSpace);
    }
}

function updateCPUBoard(array) {
    for (let i = 1; i < 101; i++) {
        let currentGridSpace = document.querySelector(`[cpudata-gridid="${i}"]`);
        currentGridSpace.setAttribute('cpuspacestatus', `${array[i]}`);
    }
}


export {
    renderPlayerBoard, 
    renderCPUBoard,
    updateCPUBoard
};