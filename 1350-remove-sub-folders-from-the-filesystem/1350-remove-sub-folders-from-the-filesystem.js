/**
 * @param {string[]} folder
 * @return {string[]}
 */
function removeSubfolders(folders) {
  folders.sort(); // Lexicographical sort

  const result = [];
  let prev = "";

  for (const f of folders) {
    if (
      prev &&
      f.startsWith(prev) &&
      f[prev.length] === "/"
    ) {
      continue; // It's a sub-folder
    }
    result.push(f);
    prev = f;
  }

  return result;
}
