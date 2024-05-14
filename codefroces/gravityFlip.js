// var columns = readline("columns");
// var cubes = [];
// for (var i = 0; i < columns; i++) {
//   var cube = readline("cubes");
//   cubes.push(cube);
// }

// print(cubes.sort((a, b) => a - b));

var columns = readline("columns");
var cubesStr = readline("cubes");
var cubes = cubesStr.split(" ");

cubes.sort((a, b) => a - b);

print(cubes.join(" "));
