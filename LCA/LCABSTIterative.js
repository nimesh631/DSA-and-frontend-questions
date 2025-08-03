function lowestCommonAncestor(root, p, q) {
  while (root) {
    if (p.val < root.val && q.val < root.val) {
      root = root.left;
    } else if (p.val > root.val && q.val > root.val) {
      root = root.right;
    } else {
      return root; // Split point or one is root
    }
  }
  return null;
}
