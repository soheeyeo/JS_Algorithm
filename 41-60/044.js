// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

// 예를들어
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

const num = prompt('숫자를 입력하세요.');

function sumNum(num) {
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum += parseInt(num[i])
    }
    return sum;
}

console.log(sumNum(num));