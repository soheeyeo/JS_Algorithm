// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

// 입력 : 거꾸로
// 출력 : 로꾸거

const word = '거꾸로';

const reversed = word.split('').reverse().join('');
console.log(reversed);