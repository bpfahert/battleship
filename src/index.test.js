import {shipFactory, gameboardFactory} from './index';

// test('returns true if ship was hit', () => {
//     expect(hit(53)).toBe(true)
// });



// let testShip = shipFactory(4, 4, 5, 6, 7, 8);
// testShip.hitCount = 4;

// test('returns true if ship is sunk', () => {
//     expect(testShip.isSunk()).toBe(true)
// });


// let testShip = shipFactory(4, 4, 5, 6, 7, 8);

// // test('returns hit if ship is hit', () => {
// //     expect(testShip.hit(5)).toBe('hit');
// // });

let testBoard = gameboardFactory();
testBoard.addShip('destroyer', 'destroyer', 4, 6, 7, 8, 9);

test('returns true if ship exists at that space and false if not', () => {
    expect(testBoard.isShip(6)).toBe(true)
});

test('returns true if ship exists at that space and false if not', () => {
    expect(testBoard.isShip(50)).toBe(false)
});


// test('returns true if ship exists at that space and false if not', () => {
//     expect(testBoard.receiveAttack(5)).toBe()
// });