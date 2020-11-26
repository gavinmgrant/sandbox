// LEETCODE
// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Example: Given binary tree [3,9,20,null,null,15,7]
//      3
//     / \
//    9  20
//      /  \
//     15   7
// The return depth is 3.

// Definition for a binary tree node:
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
// Solution:
const maxDepth = root => {
    if (root == null) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(roof.right)) + 1;
}

// BLOC
// Write an algorithm to find the height of a binary search tree. What is the time complexity of your algorithm?

// Solution:
const heightFinder = bst => {
    if (!bst) {
        return 0;
    }
    if (bst) {
        let leftSide = heightFinder(bst.left);
        let rightSide = heightFinder(bst.right);
        let height = Math.max(leftSide, rightSide) + 1;
        return height
    }
}