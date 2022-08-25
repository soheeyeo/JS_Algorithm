// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

const num = prompt('여러 개의 숫자를 입력하세요.').split(' ').reverse();
let reverseNum = '';

for(let i=0; i<num.length; i++) {
    reverseNum += (num[i]+' ');
};

console.log(reverseNum);