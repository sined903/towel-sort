
// You should implement your task here.

module.exports = function towelSort (matrix) {

    if(matrix === undefined) {
        return [];
    }

    if(typeof matrix[0] !== 'object' ) {
        return matrix
    }

    let sortMatrix = matrix.map((element, index) => {

        if ( index%2 === 0) {
            return element
        } else {
            return element.reverse()
        }
        
    }).join();


  return sortMatrix.split(',');
}

