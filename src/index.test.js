import gameboardFactory from './index';

// test('returns true if ship was hit', () => {
//     expect(hit(53)).toBe(true)
// });

test('returns true if ship is in a space', () => {
    expect(isShip(1,2)).toBe(false)
});
