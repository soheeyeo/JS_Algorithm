// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

let nums = prompt('10개의 숫자를 입력하세요.').split(' ');
nums = nums.map(n => {
    return parseInt(n, 10);
})

console.log(Math.max(...nums));