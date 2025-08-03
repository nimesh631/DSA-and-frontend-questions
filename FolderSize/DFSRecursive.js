function getFolderSizeDFS(folder) {
  if (!folder) return 0;

  if (folder.file) {
    return folder.size || 0;
  }

  let totalSize = 0;

  for (const item of folder.content || []) {
    totalSize += getFolderSizeDFS(item);
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
