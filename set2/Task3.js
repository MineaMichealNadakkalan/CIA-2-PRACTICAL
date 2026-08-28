
let counter = 3;
 
const intervalId = setInterval(() => {
  if (counter > 0) {
    console.log(counter);
    counter--;
  } else {
    console.log("liftoff!");
    clearInterval(intervalId);
  }
}, 500);
 
/* Expected sample output:
   3
   2
   1
   liftoff!
*/