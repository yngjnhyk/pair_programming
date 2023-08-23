function solution(arr) {
  const min = arr.indexOf(Math.min(...arr));
  arr.splice(min, 1);
  arr.length <= 1 ? (answer = [-1]) : (answer = arr);
  return answer;
}
