function solution(num) {
  if (num === 1) return num;
  return num + solution(--num);
}

console.log(solution(4));
