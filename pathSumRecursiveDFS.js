function hasPathSum(root, targetSum) {
  if (!root) return false;

  // If it's a leaf, check if path sum matches
  if (!root.left && !root.right) {
    return root.val === targetSum;
  }

  // Reduce the target as we go down
  const remaining = targetSum - root.val;

  return (
    hasPathSum(root.left, remaining) ||
    hasPathSum(root.right, remaining)
  );
}


// tree 
const tree = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null }
    },
    right: null
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4,
      left: null,
      right: { val: 1, left: null, right: null }
    }
  }
};

hasPathSum(tree, 22); // ✅ true: 5 → 4 → 11 → 2
