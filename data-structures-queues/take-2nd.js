/* exported take2nd */

function take2nd(queue) {
  const front = queue.dequeue();
  if (front === undefined) return;
  queue.enqueue(front);
  return queue.dequeue();
}
