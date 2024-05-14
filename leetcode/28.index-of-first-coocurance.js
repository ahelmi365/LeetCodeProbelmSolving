var strStr = function (haystack, needle) {
  return haystack.indexOf(needle);
};
// const result = strStr("abc-def-ghi", "def");
// console.log({ result });

const str = "aregmny";
const needle = "egx";

const checkSub = (str, needle) => {
  let index = -1; //
  let j = 0;
  let isFullSubString = false;

  for (let i = 0; i < str.length; i++) {
    // i = 3
    // console.log({ i });
    console.log(str[i] );
    console.log(needle[j] );
    console.log("---------------------");
    for (; j < needle.length; ) {
      if (str[i] === needle[j]) {
        // g === g
        j++; // j= 2
        console.log({ j });
        if (index === -1) {
          // index =1
          index = i;
        }

        if (j === needle.length) {
          isFullSubString = true;
          return index;
        }
      } else {
        break;
      }
    }
  }

  return index;
};

const res = checkSub(str, needle);
console.log({ res });
