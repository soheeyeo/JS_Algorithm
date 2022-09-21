// 문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

// **입력**
// aaabbbbcdddd

// **출력**
// a3b4c1d4

const txt = prompt('문자를 입력하세요.');
let result = '';
let store = txt[0];
let count = 0;

for (let i of txt) {
    if(i == store) {
        count += 1;
    } else {
        result += store + String(count);
        store = i;
        count = 1;
    }
}
result += store + String(count);
console.log(result);