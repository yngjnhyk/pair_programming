function solution(numbers) {
  var answer = 45;
  const result = numbers.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);
  answer -= result;
  return answer;
}
