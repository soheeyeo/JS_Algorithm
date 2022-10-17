// 수학공식이 제대로 입력이 되었는지 판단하는 코드를 작성하려 합니다. 괄호는 소괄호밖에 없습니다.

// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 3 + 5
// True


// 데이터 입력(1), 프로그램 종료(2) : 1
// 데이터를 입력하세요: 5 + 7) * (3 * 5)
// False

function math(e){
    let pair = 0;
    for (let i in e) {
        if(e[i] === '(') {
            pair += 1;
        } else if (e[i] === ')') {
            pair -= 1;
        }
    }
    if(pair !== 0){
        return false;
    } 
    if(pair === 0) {
        return true;
    }
}
    
while (1){
    let order = prompt('데이터 입력(1), 프로그램 종료(2)');
    if (order === '1'){
        const ex = prompt('데이터를 입력하세요');
        console.log(math(ex));
    } else {
        break;
    }
}