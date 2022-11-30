let interval = 4;

const countdown = () => {
  interval--;
  if (interval < 1) {
    console.log('Blast off!');
    clearInterval(count);
  } else {
    console.log(interval);
  }
};

const count = setInterval(countdown, 1000);
