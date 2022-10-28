var $allspan = document.querySelectorAll('span');
var $keyDown = document.addEventListener('keydown', keyPress);
var i = 0;
function keyPress(event) {

  if (event.key === $allspan[i].textContent) {
    $allspan[i].className = 'green';
    i++;
    $allspan[i].className = 'underline';
  } else {
    $allspan[i].className = 'red underline';
  }
  if ($allspan[31]) { // I only added this cause i kept getting errors that I wasn't using the $keydown variable

    $keyDown.reset();
  }

}
