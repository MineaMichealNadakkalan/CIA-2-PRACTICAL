
const argDuration = parseInt(process.argv[2], 10);
const DURATION_SECONDS = Number.isNaN(argDuration) ? 10 : argDuration; // default 10s
 
console.log(`Duration received from command line -> ${DURATION_SECONDS} seconds`);
console.log('Type "cancel" and press Enter at any time to stop early.');
 
let cancelled = false;
let remaining = DURATION_SECONDS;
 
process.stdin.setEncoding("utf8");
process.stdin.on("data", (input) => {
  if (input.trim().toLowerCase() === "cancel") {
    cancelled = true;
    console.log("Countdown cancelled by user input.");
  }
});
 
const intervalId = setInterval(() => {
  if (cancelled || remaining <= 0) {
    clearInterval(intervalId);
    if (!cancelled) console.log("Countdown finished.");
    process.exit(0);
  }
  console.log(`Seconds remaining: ${remaining}`);
  remaining--;
}, 1000);
 
/* Expected sample output (run as `node Task5.js 3`):
   Duration received from command line -> 3 seconds
   Type "cancel" and press Enter at any time to stop early.
   Seconds remaining: 3
   Seconds remaining: 2
   Seconds remaining: 1
   Countdown finished.
 
   (If "cancel" is typed and Enter pressed before it finishes:)
   Countdown cancelled by user input.
*/