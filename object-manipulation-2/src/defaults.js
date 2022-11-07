/* exported defaults */

function defaults(target, source) {

  for (var key in source) {
    if (!Object.values(target).includes(target[key])) {
      target[key] = source[key];
    }
  }

}
