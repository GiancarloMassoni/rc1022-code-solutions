/* exported swapFront */

function swapFront(list) {
  if (list.next === null) return list;
  const afterSecond = list.next.data;
  list.next.data = list.data;
  list.data = afterSecond;
  return list;
}
