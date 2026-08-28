
const DURATION_SECONDS = 3;
let remaining = DURATION_SECONDS;
 
const intervalId = setInterval(() => {
  if (remaining <= 0) {
    clearInterval(intervalId);
    return;
  }
  console.log(`Seconds remaining: ${remaining}`);
  remaining--;
}, 1000);
 
// Separate setTimeout for the end-of-countdown notification
setTimeout(() => {
  console.log("Time's up!");
}, DURATION_SECONDS * 1000 + 100);
 
/* Expected sample output:
   Seconds remaining: 3
   Seconds remaining: 2
   Seconds remaining: 1
   Time's up!
*/