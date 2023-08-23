function solution(s, n) {
  let answer = '';

  for (i = 0; i < s.length; i++) {
    let num = s[i].charCodeAt();
    if (64 < num < 91) {
      if (num + n > 90) {
        num -= 26 - n;
        answer += String.fromCharCode(num);
      } else {
        answer += String.fromCharCode(num + n);
      }
    } else if (96 < num < 123) {
      if (num + n > 122) {
        num -= 26 - n;
        answer += String.fromCharCode(num);
      } else {
        answer += String.fromCharCode(num + n);
      }
    } else if (num === 32) {
      answer += ' ';
    }
  }
  return answer;
}
//   for (i = 0; i < s.length; i++) {
//     let num = s[i].charCodeAt() + n;
//     if (num - n <= 90) {
//       if (num > 90) {
//         num -= 26 - n;
//         answer += String.fromCharCode(num);
//       } else {
//         answer += String.fromCharCode(num);
//       }
//     } else if (num - n >= 97) {
//       if (num > 122) {
//         num -= 27 - n;
//         answer += String.fromCharCode(num);
//       } else {
//         answer += String.fromCharCode(num);
//       }
//     } else if () {
//       answer += ' ';
//     }
//   }
//   return answer;
