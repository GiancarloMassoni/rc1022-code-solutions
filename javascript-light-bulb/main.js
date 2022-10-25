// Create a query selector for the div element
// Add an eventlistener for the div element using click
// Create a function that sets the class property of light and background to switch off or on
// Use an if statement to detect if light is on or off then set the opposite value in the conditional

var $light = document.querySelector('.light');
var $background = document.querySelector('.background');
$light.addEventListener('click', lightSwitch);

var lightOff = $light.className = 'light light-off';
var lightOn = $light.className = 'light light-on';
var backgroundOff = $background.className = 'background background-off';
var backgroundOn = $background.className = 'background background-on';

function lightSwitch(event) {

  if ($light.className === lightOn) {
    $light.className = lightOff;
    $background.className = backgroundOff;
  } else {
    $light.className = lightOn;
    $background.className = backgroundOn;
  }
}
