// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입력 : 10 2
// 출력 : 5 0

const [a, b] = prompt('숫자 두 개를 입력하세요.').split(' ');

const por = parseInt(a / b);
const res = parseInt(a % b);

console.log(por, res);