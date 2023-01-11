/* exported removeNext */

function removeNext(list) {
  if (list.next === null) return;
  const afterSecond = list.next.next;
  list.next = afterSecond;
  return list;
}
