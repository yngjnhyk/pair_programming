function solution(price, money, count) {
  let sumPrice = 0;
  for (let i = 1; i <= count; i++) {
    sumPrice += price * i;
  }
  console.log(money, sumPrice);

  return sumPrice > money ? -(money - sumPrice) : 0;
}
