/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman_num = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let output_int = 0;

  for (let i = 0; i < s.length; i++) {
    // console.log(s[i]);
    if (i > 0 && s[i - 1] == "I" && (s[i] == "V" || s[i] == "X")) {
      continue;
    } else if (i > 0 && s[i - 1] == "X" && (s[i] == "L" || s[i] == "C")) {
      continue;
    } else if (i > 0 && s[i - 1] == "C" && (s[i] == "D" || s[i] == "M")) {
      continue;
    }

    if (s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")) {
      if (s[i + 1] == "V") {
        output_int += 4;
      } else if (s[i + 1] == "X") {
        output_int += 9;
      }
    } else if (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) {
      if (s[i + 1] == "L") {
        output_int += 40;
      } else if (s[i + 1] == "C") {
        output_int += 90;
      }
    } else if (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M")) {
      if (s[i + 1] == "D") {
        output_int += 400;
      } else if (s[i + 1] == "M") {
        output_int += 900;
      }
    } else {
      output_int += roman_num[s[i]];
    }
  }

  return output_int;
};
