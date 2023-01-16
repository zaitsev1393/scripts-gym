const getChildren = (id, heap) => [ heap[2 * id + 1], heap[2 * id + 2]];

const getParent = (id, heap) => heap[Math.floor((id - 1) / 2)];

const addNode = (value, heap) => {
  heap.push(value);
  sortHeap(heap, heap.length - 1);
}

const sortHeap = (heap, id) => {
  const parentId = heap.findIndex(v => v == getParent(id, heap));
  const parent = getParent(id, heap);
  if(parent > heap[id]) {
    heap[parentId] = heap[id];
    heap[id] = parent;
    sortHeap(heap, parentId);
  } else {
    return heap;
  }
}

