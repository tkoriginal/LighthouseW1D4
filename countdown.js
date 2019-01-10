var countdownGenerator = function (x) {
  /* your code here */
  function countdown () {
    if (x > 0) {
      console.log(`T-minus ${x}`);
    } else if (x === 0) {
      console.log('Blast Off!');
    } else {
      console.log('Rockets already Gone, bub!');
    }
    x--
  }
  return countdown;
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
