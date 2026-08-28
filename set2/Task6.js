
const COUNTDOWN_MESSAGE = "Seconds remaining"; // change this + save while nodemon is running
 
console.log("Countdown App Ready (nodemon monitoring this file)");
console.log(`Message currently set to: "${COUNTDOWN_MESSAGE}"`);
 
let remaining = 3;
const intervalId = setInterval(() => {
  if (remaining <= 0) {
    clearInterval(intervalId);
    console.log("Time's up!");
    return;
  }
  console.log(`${COUNTDOWN_MESSAGE}: ${remaining}`);
  remaining--;
}, 1000);
 
/* Expected sample output:
   Countdown App Ready (nodemon monitoring this file)
   Message currently set to: "Seconds remaining"
   Seconds remaining: 3
   Seconds remaining: 2
   Seconds remaining: 1
   Time's up!
 
   (After editing COUNTDOWN_MESSAGE and saving, while `npm run dev`
   is active, nodemon restarts automatically and reprints from the
   top with the new message text.)
*/