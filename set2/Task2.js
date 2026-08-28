console.log("Timer started in background (via libuv)...");
 
setTimeout(() => {
  console.log("setTimeout fired! libuv notified the event loop.");
}, 2000);
 
console.log("This line prints immediately, before the timer fires.");
 
/* Expected sample output:
   Timer started in background (via libuv)...
   This line prints immediately, before the timer fires.
   (after ~2s) setTimeout fired! libuv notified the event loop.
*/