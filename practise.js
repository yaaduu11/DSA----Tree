class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

function findDepth(root, x) {
    if (root == null) {
        return -1; // Return -1 if the tree is empty or the node is not found
    }
    
    if (root.data == x) {
        return 0; // Found the node, return depth 0
    }
    
    // Check in the left subtree
    let dist = findDepth(root.left, x);
    if (dist >= 0) {
        return dist + 1; // Increment the depth if found in left subtree
    }
    
    // Check in the right subtree
    dist = findDepth(root.right, x);
    if (dist >= 0) {
        return dist + 1; // Increment the depth if found in right subtree
    }
    
    return -1; // Return -1 if the node is not found in both subtrees
}

let root = new Node(5);
root.left = new Node(10);
root.left.left = new Node(20);

let k = 25;
console.log(findDepth(root, k)); // Output: -1 (not found)

k = 20;
console.log(findDepth(root, k)); // Output: 2 (found at depth 2)
