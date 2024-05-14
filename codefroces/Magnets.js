var n = readline("input 1");
var magents = [];
for (var i = 0; i < n; i++) {
  var m = readline("input 2");
  magents.push(m);
}
var groupCounter = 1;

for (var j = 1; j < magents.length; j++) {
  if (magents[j] !== magents[j - 1]) {
    groupCounter++;
  }
}

print(groupCounter);
