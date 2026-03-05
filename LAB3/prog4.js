const delay = (ms, val, reject = false) =>
  new Promise((res, rej) => setTimeout(() => reject ? rej(val) : res(val), ms));

Promise.all([
  delay(1000, "A"),
  delay(800, "B"),
  delay(500, "Rejected!", true)
])
  .then(r => console.log("all:", r))
  .catch(e => console.log("all rejected:", e));

Promise.race([
  delay(600, "Slow resolve"),
  delay(300, "Fast reject", true),
  delay(900, "Slower resolve")
])
  .then(v => console.log("race won (resolve):", v))
  .catch(e => console.log("race won (reject):", e));