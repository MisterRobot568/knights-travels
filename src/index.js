import Node from './node.js';
import KnightMoves from './knightMoves.js';
import { calculateEdges, filterChildren } from './additionalFunctions.js';

// function for printing
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};
const prettyPrintGraph = (
    node,
    visited = new Set(),
    prefix = '',
    isLeft = true
) => {
    if (!node || visited.has(node)) {
        return;
    }
    visited.add(node);

    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);

    // Check if edges exist and are an array of coordinate pairs
    if (Array.isArray(node.edges) && node.edges.length > 0) {
        for (let i = 0; i < node.edges.length; i++) {
            const [x, y] = node.edges[i]; // Destructure the coordinate pair
            // You may want to format this to display in a readable way
            console.log(
                `${prefix}${isLeft ? '    ' : '│   '}${
                    isLeft ? '└── ' : '┌── '
                }(${x}, ${y})`
            );
            // If you have nodes connected to these coordinates, you would call prettyPrintGraph recursively
            // prettyPrintGraph(nextNode, visited, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
};
///////
// let nodeTest = new Node([3, 3]);
let test = new KnightMoves([1, 1], [6, 6]);

// prettyPrintGraph(test.root);
