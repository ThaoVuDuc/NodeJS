module.exports = {
    totalElement: () => {
        var arr = [1, 2, 3, 4];
        var t = arr.reduce((tota, a, index, arr) => {return tota += a}, 0);
        return t;
    },
    information: {
        name: "thao",
        age: 21
    },
    calculation: {
        sum: (a, b) => {return a + b},
        sub: (a, b) => {return a - b},
        div: (a, b) => {return a/b},
        mul: (a, b) => {return a * b}
    }
}