import Node from './node.js';
import {
    calculateEdges,
    filterChildren,
    printMoves,
} from './additionalFunctions.js';
class KnightMoves {
    constructor(knightPos, destination) {
        this.knightPos = knightPos;
        this.root = new Node(knightPos);
        this.destination = destination;
        this.levelOrderRec();
    }

    levelOrderRec() {
        // level order traversal of the graph/tree
        let queue = [];
        queue.push(this.root);
        let destination = this.destination;
        let visitedEdges = [];

        function helper(queue, destination, visitedEdges) {
            // 1)take current node from the queue
            let currentNode = queue.shift();
            if (
                currentNode.data[0] === destination[0] &&
                currentNode.data[1] === destination[1]
            ) {
                return currentNode;
            }
            // 2) do stuff to the node/ get the children
            let children = calculateEdges(currentNode);
            let filteredChildren = filterChildren(children, visitedEdges);
            // add filteredChildren to the edges, queue, and the edges of the node

            visitedEdges = visitedEdges.concat(filteredChildren);
            queue = queue.concat(filteredChildren);
            currentNode.edges = filteredChildren;

            if (queue.length > 0) {
                let result = helper(queue, destination, visitedEdges);
                if (result) {
                    return result;
                }
            }
        }
        let endNode = helper(queue, destination, visitedEdges);
        printMoves(this.traceBack(endNode));
    }
    traceBack(endNode) {
        // this method essentially reverses the array so that the moves will be in order
        let nextNode = endNode;
        let array = [];
        while (
            nextNode !== null
            // nextNode.data[0] !== this.knightPos[0] &&
            // nextNode.data[1] !== this.knightPos[1]
        ) {
            array.unshift(nextNode.data);
            nextNode = nextNode.parent;
        }
        return array;
    }
}

export default KnightMoves;
