function minDepth(root) {
  if (!root) return 0;

  // if one child is null, we return the other side
  if (!root.left) return 1 + minDepth(root.right);
  if (!root.right) return 1 + minDepth(root.left);

  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}
