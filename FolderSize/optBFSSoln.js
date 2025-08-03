function getFolderSizeBFS(folder) {
  if (!folder) return 0;

  let totalSize = 0;
  const queue = [folder];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.file) {
      totalSize += current.size || 0;
    } else if (current.content && Array.isArray(current.content)) {
      queue.push(...current.content);
    }
  }

  return totalSize;
}

//input
const folder = {
  name: "root",
  file: false,
  content: [
    {
      name: "file1.txt",
      file: true,
      size: 100,
    },
    {
      name: "subfolder",
      file: false,
      content: [
        {
          name: "file2.txt",
          file: true,
          size: 200,
        },
        {
          name: "file3.txt",
          file: true,
          size: 300,
        },
        {
          name: "nested-folder",
          file: false,
          content: [
            {
              name: "deepfile.txt",
              file: true,
              size: 50,
            },
          ],
        },
      ],
    },
  ],
};

console.log("Total Size (BFS):", getFolderSizeBFS(folder)); // 650
console.log("Total Size (DFS):", getFolderSizeDFS(folder)); // 650

