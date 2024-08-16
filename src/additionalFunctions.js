import Node from './node.js';
function calculateEdges(node) {
    // function to calculate all edges of a node
    // we want to calculate ([x+2, y-1], [x+2, y+1], )
    let root = node;
    let x = root.data[0];
    let y = root.data[1];
    let array = [
        new Node([x - 2, y + 1], root),
        new Node([x - 2, y - 1], root),
        new Node([x + 2, y + 1], root),
        new Node([x + 2, y - 1], root),
        new Node([x - 1, y + 2], root),
        new Node([x - 1, y - 2], root),
        new Node([x + 1, y + 2], root),
        new Node([x + 1, y - 2], root),
    ];
    let newArray = array.filter((element) => {
        // if element is out of bounds, remove it
        return (
            element.data[0] >= 0 &&
            element.data[0] <= 7 &&
            element.data[1] >= 0 &&
            element.data[1] <= 7
        );
    });
    return newArray;
}

function filterChildren(arrayA, arrayB) {
    if (arrayB.length === 0) {
        return arrayA;
    }
    arrayA = arrayA.filter((aNode) => {
        return !arrayB.some(
            (bNode) =>
                aNode.data[0] === bNode.data[0] &&
                aNode.data[1] === bNode.data[1]
        );
    });
    return arrayA;
}

function printMoves(array) {
    let numMoves = array.length - 1;
    console.log(`You made it in ${numMoves}! Here's your path:`);
    array.forEach((element) => {
        console.log(element);
    });
}

export { calculateEdges, filterChildren, printMoves };
