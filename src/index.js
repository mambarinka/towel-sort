// You should implement your task here.

module.exports = function towelSort(matrix) {

    if (!matrix || matrix.length === 0) {
        return [];
    } else {
        const reverseArray = (matrix) => {
            for (let index = 1; index < matrix.length; index += 2) {
                const reverseArray = matrix[index].reverse();
            }
            return matrix;
        };

        reverseArray(matrix);

        let flat = matrix.reduce((prev, item) => {
            return prev.concat(item);
        }, []);

        return flat;
    }
};
