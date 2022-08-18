
const shipFactory = (length, hitLocations, xCoordinate, yCoordinate) => {

    let hitCount = 0;

    // function placeShip(x,y) {
    //     xCoordinate = x;
    //     yCoordinate = y;
    // }


    for (let i = 0; i < length; i++) {
        hitLocations[i] = false; 
    };
    
    //takes a location and marks it as hit
    //use numeric system for grid? (0-99?) or use array of arrays? ([] by []), CURRENT SYSTEM REQUIRES HIT LOCATIONS AND COORDINATE INDEXES TO ALIGN
    function hit(ship) {
            // hitLocations[(coordinates.indexOf(location))] = true;
            hitCount += 1;   
    }


    function isSunk() {
        if (hitCount === length) {
            return true;
        }
        else {
            return false;
        }
    }

    return {hit, isSunk, hitLocations, xCoordinate, yCoordinate};
}

const gameboardFactory = () => {
    let totalHits = 0;
    let locationArray = [];
    for (let i = 1; i < 100; i++) {
        locationArray[i] = 'empty';
    }
    

    function isShip (x, y) {
        let shipLocation = (y * 10) + x;
        if(locationArray[shipLocation] === 'ship') {
            return true;
        }
        else {
            return false;
        }
    }

    //define shipLocation in ship Factory?

    function isAttacked (location) {
        if (locationArray[location] === 'miss' || locationArray[location] === 'hit') {
            return true;
        }
        else {
            return false;
        }
    }


    function receiveAttack(x, y) {
        if (isShip(x, y) === true) {
            hit(ship);
            totalHits += 1;
            let hitLocation = (y * 10) + x;
            locationArray[hitLocation] = 'hit';
            checkBoard();
            //use switch case 'destroyer', etc
        }
        else {
            let missLocation = (y * 10) + x;
            locationArray[missLocation] = 'miss';
        }

    }

    function checkBoard() {
        if (totalHits === 17) {
            alert('Game Over!');
            //specify who won
        }
    }

    return {receiveAttack, isAttacked};
}

const Player = (name, cpu) => {
    let playerName = name;

    function cpuAttack(playerBoard) {
        let cpuX = (Math.floor(Math.random() * 10) + 1);
        let cpuY = (Math.floor(Math.random() * 10) + 1);
        let cpuAttackLocation = (cpuY * 10) + cpuX;
        
        if (playerBoard.isAttacked() === false) {
            playerBoard.receiveAttack(cpuX, cpuY);  
        }
        else {
            cpuAttack(playerBoard);
        }
    }

    return {cpuAttack, playerName};
}


// ships:
// 5,4,3,3,2
// 10 by 10 gameboard (A-J, 1-10?)

function gameController() {
    let playerBoard = gameboardFactory;
    let cpuBoard = gameboardFactory;
    let humanPlayer = Player('Bryan', false);
    let cpuPlayer = Player('Computer', true);
    
    let playerTurn = true;

    //need way to switch between player and cpu turn


}

//DOM ELEMENTS
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

function renderCPUBoard() {
    let cpuBoard = document.getElementById('cpuboard');
    let xCount = 1;
    let yCount = 1;
    let yValue = 1;
    for (let i = 1; i < 101; i++) {
        let gridSpace = document.createElement('div');
        gridSpace.classList += 'gridSpace';
        gridSpace.setAttribute('cpudata-gridID', i);
        //set to '' only if initializing, add switch case instead of if?
        if (gridSpace.hasAttribute('cpuspaceStatus') === false) {
            gridSpace.setAttribute('cpuspaceStatus', '');
            
           //event listener here?

        }
        else if (gridSpace.getAttribute('cpuspaceStatus') === 'miss') {
            gridSpace.textContent = 'miss';
        }
        else if (gridSpace.getAttribute('cpuspaceStatus') === 'hit') {
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

        cpuBoard.appendChild(gridSpace);
        // }
        // for (let j = 1; j < 11; j++) {
        //     gridSpace.setAttribute('cpudata-gridX', j);
        //     for (let k = 1; k < 11; k++) {
        //         gridSpace.setAttribute('cpudata-gridY', k);
        //     }
    }
}

// gridSpace.addEventListener('click', () => {
//     //check if a ship is there and set space status to hit if so and miss if not (place eventlistener outside of DOM and just call functions??)
//     receiveAttack();
//     if () {
//         gridSpace.setAttribute('cpuspaceStatus', 'hit');
//         gridSpace.style.backgroundColor = "red";
//     }
//     else if () {
//         gridSpace.setAttribute('cpuspaceStatus', 'miss');
//         gridSpace.style.backgroundColor= "blue";
    //remove event listener after click to prevent bugs
//     }
// })


// function DOMListener() {
    
// }


renderPlayerBoard();
renderCPUBoard();