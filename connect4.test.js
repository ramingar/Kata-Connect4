const R = require('ramda');

test('Find connect 4', () => {
    const lastPlay = [3, 5];

    const grid = [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, "®", null, null, null, null, "®"],
        ["©", "©", null, null, "©", "®", "®"],
        ["®", "®", "®", "©", "®", "©", "©"],
        ["®", "©", "©", "®", "©", "®", "©"]
    ];

    const result = [
        [2, 6],
        [3, 5],
        [4, 4],
        [5, 3]
    ];

    expect(yourFn(grid, lastPlay)).toEqual(result)
});
