var $h1 = document.querySelector('.message');

function changeText() {
  $h1.textContent = 'Hello There';
}

setTimeout(changeText, 2000);
