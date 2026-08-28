
function checkTimeLeftCallback(seconds, callback) {
  setTimeout(() => {
    callback(null, seconds); // (error, result) style callback
  }, 1000);
}
 
checkTimeLeftCallback(7, (err, result) => {
  console.log(`Callback result -> ${result} seconds left`);
});
 
/* Expected sample output (after ~1s):
   Callback result -> 7 seconds left
*/