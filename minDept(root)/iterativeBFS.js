function minDepth(root) {
  if (!root) return 0;

  const queue = [[root, 1]]; // [node, currentDepth]

  while (queue.length) {
    const [node, depth] = queue.shift();

    if (!node.left && !node.right) {
      return depth; // first leaf node we hit
    }

    if (node.left) queue.push([node.left, depth + 1]);
    if (node.right) queue.push([node.right, depth + 1]);
  }
}

// example tree 
const root = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: { val: 5, left: null, right: null }
  }
};
