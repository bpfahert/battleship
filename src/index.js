
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



    function receiveAttack(x, y) {
        if (isShip(x, y) === true) {
            hit(ship);
            totalHits += 1;
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
        }
    }

}

const Player = (name, cpu) => {
    let playerName = name;

    if (cpu === true) {
        playerBoard.receiveAttack((Math.floor(Math.random() * 10) + 1), (Math.floor(Math.random() * 10) + 1));        
    }
}


// ships:
// 5,4,3,3,2
// 10 by 10 gameboard (A-J, 1-10?)



export default shipFactory;