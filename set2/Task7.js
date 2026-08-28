
let remaining = 3;
 
const intervalId = setInterval(() => {
  if (remaining <= 0) {          // FIX: was `remaining < 0`
    clearInterval(intervalId);
    console.log("Done");
    return;
  }
  console.log(remaining);
  remaining--;
}, 500);
 
/* Expected sample output:
   3
   2
   1
   Done
*/