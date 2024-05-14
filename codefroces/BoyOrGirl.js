var username = readline("username");

var userNameList = username.split("");

var userNameSet = new Set(userNameList);
if (userNameSet.size % 2 === 0) {
  print("CHAT WITH HER!");
} else {
  print("IGNORE HIM!");
}
