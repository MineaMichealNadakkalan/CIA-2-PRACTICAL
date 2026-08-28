
function checkTimeLeftPromise(seconds) {
  return new Promise((resolve, reject) => {
    if (seconds < 0) {
      reject(new Error("Invalid duration: seconds cannot be negative"));
      return;
    }
    setTimeout(() => {
      resolve(seconds);
    }, 1000);
  });
}
 
checkTimeLeftPromise(7)
  .then((result) => console.log(`Promise resolved -> ${result} seconds left`))
  .catch((err) => console.log(`Promise rejected -> ${err.message}`));
 
/* Expected sample output (after ~1s):
   Promise resolved -> 7 seconds left
*/