function solution(denum1, num1, denum2, num2) {
  // 1. 두 분모의 곱을 공통 분모로 하여 값을 계산한다.
  let numerator = denum1 * num2 + denum2 * num1;
  let denominator = num1 * num2;

  // 2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.
  const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
  const gcd = getGCD(numerator, denominator);
  numerator /= gcd;
  denominator /= gcd;

  return [numerator, denominator];
}
