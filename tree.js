

// Structure of a Binary Tree Node
class Node {
    constructor(x) {
        this.data = x;
        this.left = null;
        this.right = null;
    }
}

// Function to find the depth of a given node in a Binary Tree
function findDepth(root, x) {
    // Base case
    if (root === null) {
        return -1;
    }

    // Initialize distance as -1
    let dist = -1;

    // Check if x is current node
    if (root.data === x) {
        return dist + 1;
    }

    dist = findDepth(root.left, x);
    if (dist >= 0) {
        return dist + 1;
    }

    dist = findDepth(root.right, x);
    if (dist >= 0) {
        return dist + 1;
    }

    return dist;
}

// Helper function to find the height of a given node in the binary tree
function findHeightUtil(root, x, heightObj) {
    // Base Case
    if (root === null) {
        return -1;
    }

    // Store the maximum height of the left and right subtree
    let leftHeight = findHeightUtil(root.left, x, heightObj);
    let rightHeight = findHeightUtil(root.right, x, heightObj);

    // Update height of the current node
    let ans = Math.max(leftHeight, rightHeight) + 1;

    // If current node is the required node
    if (root.data === x) {
        heightObj.height = ans;
    }

    return ans;
}

// Function to find the height of a given node in a Binary Tree
function findHeight(root, x) {
    let heightObj = { height: -1 };

    // Stores height of the Tree
    findHeightUtil(root, x, heightObj);

    // Return the height
    return heightObj.height;
}

// Driver Code
// Binary Tree Formation
let root = new Node(5);
root.left = new Node(10);
root.right = new Node(15);
root.left.left = new Node(20);
root.left.right = new Node(25);
root.left.right.right = new Node(45);
root.right.left = new Node(30);
root.right.right = new Node(35);

let k = 25;

// Function call to find the depth of a given node
console.log("Depth: ", findDepth(root, k));

// Function call to find the height of a given node
console.log("Height: ", findHeight(root, k));
