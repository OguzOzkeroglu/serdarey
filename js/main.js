document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  var date = new Date('2022.04.09').getTime() / 1000

  // Set up FlipDown
  var flipdown = new FlipDown(date)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });
});
