// Create a variable for number of clicks and function that adds clicks
// Create variables for hot button and click count queries
// create a counter for amount of clicks
// Update the text for number of clicks
// Change the color of the button based on click number
var numOfClicks = 0;

function clickCounter(event) {
  numOfClicks++;
  $clicks.textContent = 'Clicks: ' + numOfClicks;

  if (numOfClicks < 4) {
    $button.className = 'hot-button cold';
  } else if (numOfClicks < 7) {
    $button.className = 'hot-button cool';
  } else if (numOfClicks < 10) {
    $button.className = 'hot-button tepid';
  } else if (numOfClicks < 13) {
    $button.className = 'hot-button warm';
  } else if (numOfClicks < 16) {
    $button.className = 'hot-button hot';
  } else if (numOfClicks > 16) {
    $button.className = 'hot-button nuclear';
  }

}

var $button = document.querySelector('.hot-button');
var $clicks = document.querySelector('.click-count');

$button.addEventListener('click', clickCounter);
