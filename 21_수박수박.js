function solution(n) {
  let repeat;
  if (n % 2 === 0) {
    repeat = n / 2;
    return '수박'.repeat(repeat);
  } else {
    repeat = Math.floor(n / 2);
    return '수박'.repeat(repeat) + '수';
  }
}
solution(3)