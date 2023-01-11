/* exported updateHead */

function updateHead(list, value) {
  if (list.data === undefined) return;
  list.data = value;
  return list.data;
}
