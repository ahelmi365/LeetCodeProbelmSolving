var word = readline("enter  a word");

var countCapitalLetters = 0;

for (var i = 0; i < word.length; i++) {
  var upper = word[i].toUpperCase();
  if (word[i] === upper) {
    countCapitalLetters++;
  }
}

if (countCapitalLetters > word.length / 2) {
  print(word.toUpperCase());
} else {
  print(word.toLowerCase());
}
