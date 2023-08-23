function solution(x) {
  let sum = 0;
  array = Array.from(String(x));
  array.forEach((i) => {
    sum += parseInt(i);
  });
  return x % sum === 0;
}
