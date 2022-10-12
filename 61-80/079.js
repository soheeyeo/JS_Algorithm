// 다음의 값이 주어졌을 때

// l = [10, 20, 25, 27, 34, 35, 39]

// n번 순회를 결정합니다. 예를 들어 2번 순회하면

// l = [35, 39, 10, 20, 25, 27, 34]

// 여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

// 예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

// **순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
// 순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
// 리스트의_차 = [25, 19, 15, 7, 9, 8, 5]**

// 39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

const l = [10, 20, 25, 27, 34, 35, 39]; //기존 입력 값
const n = parseInt(prompt('순회횟수는?'), 10);

function rotate(inL, inN){
    let c = inL.slice();
    let arr = [];
    for (let i = 0; i < inN; i++) {
        c.unshift(c.pop());
    }
    for (let i in c) {
        arr.push(Math.abs(inL[i] - c[i]))
    }

    const min = Math.min.apply(null, arr);

    let index = arr.indexOf(min);

    console.log('index:', index);
    console.log('value:', inL[index], c[index]);
}

rotate(l, n);