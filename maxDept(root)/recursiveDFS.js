function maxDepth(root) {
  if (!root) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
}
