const traverse = (node, arr = []) => {
  arr.push(node.value);
  if(node.left) traverse(node.left, arr);
  if(node.right) traverse(node.right, arr);
  return arr;
}