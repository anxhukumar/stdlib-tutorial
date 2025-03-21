import incrmean from "https://cdn.jsdelivr.net/gh/stdlib-js/stats-incr-mean@esm/index.mjs";

const accumulator = incrmean();

const a = accumulator(2.0);

console.log(a);