// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

const txt = prompt('문자를 입력하세요.');
let caseTxt = '';

function changeCase() {
    for(let i in txt) {
        if (txt[i] === txt[i].toLowerCase()) {
            caseTxt += txt[i].toUpperCase();
        } else {
            caseTxt += txt[i].toLowerCase();
        }
    } return caseTxt;
}

console.log(changeCase(txt));