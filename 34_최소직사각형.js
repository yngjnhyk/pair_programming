function solution(sizes) {
  var answer = 0;
  let arr0 = [];
  let arr1 = [];
  let newArr = [];
  let max0 = 0;
  let max1 = 0;
  let newMax = 0;
  for (let i = 0; i < sizes.length; i++) {
    arr0.push(sizes[i][0]);
    arr1.push(sizes[i][1]);
  }
  max0 = Math.max.apply(null, arr0);
  max1 = Math.max.apply(null, arr1);

  if (max0 < max1) {
    for (let i = 0; i < sizes.length; i++) {
      if (sizes[0] === max0) {
        newArr.push(sizes[1]);
      } else {
        newArr.push(sizes[0]);
      }
    }
  }
  newMax = Math.max.apply(null, newArr);
  console.log(newMax);
}
