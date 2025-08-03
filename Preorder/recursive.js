function preorderTraversal(root) {
  const result = [];

  function dfs(node) {
    if (!node) return;
    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result;
}
