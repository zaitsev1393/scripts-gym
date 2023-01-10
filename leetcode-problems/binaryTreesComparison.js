class Node {
  value = null;
  
  constructor(value) {
    this.value = value;
  }
  left?: Node;
  right?: Node;
}

const walk = (a: Node | null, b: Node | null): boolean => {
  if(a?.value != b?.value ) return false;
  if(a === null && b === null) return true;
  if(a === null || b === null) return false;
  return walk(a?.left, b?.left) && walk(a?.right, b?.right);
}

export default function compare(a: Node | null, b: Node | null): boolean {
  return walk(a, b);
}