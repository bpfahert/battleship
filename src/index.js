
const shipFactory = (name, length, ...args) => {
    name;
    let shipLength = length;
    let hitCount = 0;
    let shipLocations = args;
    let hitLocations = args;
    let shipsSunk = 0;

    //hit locations will read 'hit' instead of location number if hit
    function hit(location) {
        hitLocations[hitLocations.indexOf(location)]= 'hit';
        hitCount += 1;
    }

    function isSunk(ship) {
        if (hitCount === length) {
            shipsSunk += 1;
            return true;
        }
        else {
            return false;
        }
    }

    return {hit, isSunk, shipsSunk, name, hitLocations};
}

const gameboardFactory = () => {
    let locationArray = [];
    let allShipsArray = [];

    for (let i = 1; i < 101; i++) {
        locationArray[i] = 'empty';
    }

    //ship argument and name argument need to be the same
    function addShip(ship, name, length, ...args) {
        ship = shipFactory(name, length, ...args);
        let shipType = name;
        let shipArray = args;
        for (let i = 0; i < shipArray.length; i++) {
            let shipSpace = shipArray[i];
            locationArray[shipSpace] = `${shipType}`;
        }
        allShipsArray.push(ship);
    }

    function isValidAttackSpace(location) {
        if (locationArray[location] !== 'miss' && locationArray[location] !== 'hit' ) {
            return true;
        }
        else {
            return false;
        }
    }

    //check if ship is present in location
    function isShip(location) {
        if (locationArray[location] !== 'empty' && locationArray[location] !== 'miss' && locationArray[location] !== 'hit' ) {
            return true;
        }
        else {
            return false;
        }
    }

    function receiveAttack(location) {
        if (isShip(location) === true) {
            let shipID = locationArray[location];
            let ship = allShipsArray.find(({ name }) => name === shipID);
            ship.hit(location);
            locationArray[location] = 'hit';
        }
        else {
            locationArray[location] = 'miss';
        }
    }

    //check if all ships have been sunk
    function checkAllShips () {
        if (shipsSunk === 5) {
            return true;
        }
        else {
            return false;
        }
    }

    return {addShip, locationArray, isValidAttackSpace, isShip, receiveAttack, allShipsArray, checkAllShips};
}

const Player = (name, cpuStatus) => {
    name;

    //TODO: TEST
    function cpuAttack (playerBoard) {
        let attackLocation = (Math.floor((Math.random() * 100) + 1));
        if (playerBoard.isValidAttackSpace(attackLocation) === true) {
            playerBoard.receiveAttack(attackLocation);  
            console.log(`${attackLocation} has not been fired at`)
        }
        else {
            console.log('repeat');
            cpuAttack(playerBoard);
        }
    }
    return {name, cpuAttack};
}



let testBoard = gameboardFactory();
testBoard.addShip('destroyer', 'destroyer', 4, 6, 7, 8, 9);

const player1 = Player('Bryan', false);

const cpu = Player('Computer', true);


cpu.cpuAttack(testBoard);
console.table(testBoard.locationArray);
console.table(testBoard.allShipsArray);

export {
    shipFactory,
    gameboardFactory,
    Player
}



// import {renderPlayerBoard, renderCPUBoard, updateCPUBoard} from './dom';


// const shipFactory = (length, hitLocations, xCoordinate, yCoordinate) => {

//     let hitCount = 0;

//     // function placeShip(x,y) {
//     //     xCoordinate = x;
//     //     yCoordinate = y;
//     // }


//     for (let i = 0; i < length; i++) {
//         hitLocations[i] = false; 
//     };
    
//     //takes a location and marks it as hit
//     //use numeric system for grid? (0-99?) or use array of arrays? ([] by []), CURRENT SYSTEM REQUIRES HIT LOCATIONS AND COORDINATE INDEXES TO ALIGN
//     function hit(location) {
//             hitCount += 1;   
//     }


//     function isSunk() {
//         if (hitCount === length) {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     return {hit, isSunk, hitLocations, xCoordinate, yCoordinate};
// }

// const gameboardFactory = () => {
//     let totalHits = 0;
//     let locationArray = [];
//     for (let i = 1; i < 100; i++) {
//         locationArray[i] = 'unknown';
//     }
    

//     function isShip (x, y) {
//         let shipLocation = (y * 10) + x;
//         if(locationArray[shipLocation] === 'ship') {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }

//     //define shipLocation in ship Factory?

//     function isAttacked (location) {
//         if (locationArray[location] === 'miss' || locationArray[location] === 'hit') {
//             return true;
//         }
//         else {
//             return false;
//         }
//     }


//     function receiveAttack(x, y) {
//         if (isShip(x, y) === true) {
//             hit(ship);
//             totalHits += 1;
//             let hitLocation = (y * 10) + x;
//             locationArray[hitLocation] = 'hit';
//             checkBoard();
//             return true;
//             //use switch case 'destroyer', etc
//         }
//         else {
//             let missLocation = (y * 10) + x;
//             return false;
//         }

//     }

//     function checkBoard() {
//         if (totalHits === 17) {
//             alert('Game Over!');
//             //specify who won
//         }
//     }

//     return {receiveAttack, isAttacked, locationArray};
// }

// const Player = (name, cpu) => {
//     let playerName = name;

//     function cpuAttack(playerBoard) {
//         let cpuX = (Math.floor(Math.random() * 10) + 1);
//         let cpuY = (Math.floor(Math.random() * 10) + 1);
//         let cpuAttackLocation = (cpuY * 10) + cpuX;
        
//         if (playerBoard.isAttacked() === false) {
//             playerBoard.receiveAttack(cpuX, cpuY);  
//         }
//         else {
//             cpuAttack(playerBoard);
//         }
//     }

//     return {cpuAttack, playerName};
// }


// // ships:
// // 5,4,3,3,2
// // 10 by 10 gameboard (A-J, 1-10?)

// // function gameController() {
// //     let playerBoard = gameboardFactory();
// //     let computerBoard = gameboardFactory();
// //     let humanPlayer = Player('Bryan', false);
// //     let cpuPlayer = Player('Computer', true);
    
// //     let playerTurn = true;

//     //need way to switch between player and cpu turn
// // }

// //DOM ELEMENTS





// // function DOMListener() {
    
// // }

// let playerBoard = gameboardFactory();
// let computerBoard = gameboardFactory();
// let humanPlayer = Player('Bryan', false);
// let cpuPlayer = Player('Computer', true);

// renderPlayerBoard();
// renderCPUBoard(computerBoard);
// updateCPUBoard(computerBoard.locationArray);

// let testRun = document.querySelector('[cpudata-gridY="2"][cpudata-gridX="3"]');

// testRun.style.backgroundColor= 'green';

// computerBoard.locationArray[3] = 'ship';
// updateCPUBoard(computerBoard.locationArray);