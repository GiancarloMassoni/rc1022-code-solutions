var $text = document.querySelector('.countdown-display');
var counter = 4;

function countdown() {
  counter--;
  if (counter > 0) {
    $text.textContent = counter;
  } else {
    $text.textContent = 'urf beloww us';
    clearInterval(setInterval);
  }
}

setInterval(countdown, 1000);
