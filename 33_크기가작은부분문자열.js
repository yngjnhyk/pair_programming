function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    console.log(t.substr(i, p.length));
    if (t.substr(i, p.length) <= p) {
      answer += 1;
    }
  }
  return answer;
}
