const s = 'abcd';
function solution(s) {
  var answer = '';
  let index;
  if (s.length % 2 === 0) {
    index = s.length / 2;
    return s[index] + s[index + 1];
  } else {
    index = Math.floor(s.length / 2) + 1;
    return s[index];
  }
}
solution(s);
