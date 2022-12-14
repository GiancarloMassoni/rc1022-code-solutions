/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) return;
  for (let i = 0; i < index; i++) {
    const popped = queue.dequeue();
    queue.enqueue(popped);
  }
  return queue.dequeue();

}
