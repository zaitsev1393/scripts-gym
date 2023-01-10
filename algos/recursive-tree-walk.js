class Node {
  left = null;
  right = null;
  constructor(value) {
    this.value = value;
  }
}

const root = new Node(2);
root.left = new Node(1);
root.right = new Node(3);

const revWalk = (node) => {
  if(!node.value) return;
  console.log(node.value);
  if(node.left) revWalk(node.left);
  if(node.right) revWalk(node.right);
}
