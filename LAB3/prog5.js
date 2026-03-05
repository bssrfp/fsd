const task = (n, ms) => new Promise(r => 
  setTimeout(() => { console.log(`Task ${n} done`); r(n); }, ms)
);

async function seq() {
  console.log("Sequential:");
  await task(1, 1000);
  await task(2, 600);
  await task(3, 800);
  console.log("All done\n");
}

async function par() {
  console.log("Parallel:");
  await Promise.all([task("A", 1000), task("B", 600), task("C", 800)]);
  console.log("All done");
}

seq().then(par);