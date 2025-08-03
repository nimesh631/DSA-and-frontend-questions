function lowestCommonAncestor(root, p, q) {
  if (!root) return null;

  // Case 1: Both p and q are smaller than root
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }

  // Case 2: Both p and q are greater than root
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  // Case 3: p and q are on different sides (or one is the root)
  return root;
}
