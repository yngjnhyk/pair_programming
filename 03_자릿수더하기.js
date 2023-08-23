function solution(n) {
  var answer = 0;
  const newArr = Array.from(String(n));
  newArr.forEach((a) => {
    a = Number(a);
    answer += a;
  });
  console.log('answer');

  return answer;
}
