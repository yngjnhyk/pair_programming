let s = 'try hello world';
function solution(s) {
  var answer = '';
  let array = s.split(' ');
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (j % 2 === 0) {
        answer += array[i][j].toUpperCase();
      } else {
        answer += array[i][j];
      }
    }
    if (i < array.length - 1) {
      answer += ' ';
    }
  }
  return answer;
}
solution(s);
