var $allspan = document.querySelectorAll('span');
document.addEventListener('keydown', keyPress);
var i = 0;
function keyPress(event) {

  if (event.key === $allspan[i].textContent) {
    $allspan[i].className = 'green';
    i++;
    $allspan[i].className = 'underline';
  } else {
    $allspan[i].className = 'red underline';
  }

}
