class Node {
    constructor(data, parent = null) {
        this.data = data;
        // this.edges = this.calculateMoveSet();
        this.edges = null;
        this.parent = parent;
    }
}

export default Node;
