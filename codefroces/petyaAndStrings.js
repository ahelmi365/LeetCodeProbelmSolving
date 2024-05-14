const a = readline("input 1").toLowerCase();
const b = readline("input 2").toLowerCase();
if (a === b) {
  console.log("0");
} else if (a < b) {
  console.log("-1");
} else {
  console.log("1");
}

