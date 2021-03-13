// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arrNew = [];
    if (matrix === undefined || matrix.length === 0) {
        return arrNew;
    }
    for (let odd = 0; odd < matrix.length; odd++) {
        if (odd % 2 !== 0) {
            matrix[odd].reverse();
        }
        for (let even = 0; even < matrix[odd].length; even++) {
            arrNew.push(matrix[odd][even])
        }
    }
    return arrNew;
}