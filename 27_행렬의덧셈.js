function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let sum = [];
    for (let j = 0; j < arr2.length; j++) {
      if (i === j) {
        for (let z = 0; z < arr1[i].length; z++) {
          sum.push(arr1[i][z] + arr2[j][z]);
        }
        answer.push(sum);
      }
    }
  }
  return answer;
}
