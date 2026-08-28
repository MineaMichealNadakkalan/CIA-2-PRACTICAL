
function secondsBetweenDates(start, end) {
  return Math.round((end - start) / 1000);
}
 
const start = new Date();
const end = new Date(Date.now() + 5000); // 5 seconds ahead
 
console.log(`Seconds between dates -> ${secondsBetweenDates(start, end)}`);
 
/* Expected sample output:
   Seconds between dates -> 5
*/