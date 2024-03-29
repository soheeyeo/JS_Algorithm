// 골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과

// 위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

// 예)
// 100 == 47 + 53
// 56 == 19 + 37

// **2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를** 작성하세요. 

// * 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.

let prime = [];
let isPrime = true
let num = 100;
let answer = [];

for (let i = 2; i < num; i++) {
    for (let j = 2; j < i; j++) {
        if(i % j == 0) {
            isPrime = false;
        }
    }
    if(isPrime) {
        prime.push(i);
    }
    isPrime = true;
}

for (let n of prime) {
    if(prime.includes(num - n) && n <= num - n) {
        answer.push([n, num - n]);
    }
}

let gap = answer.map((e) => e[1] - e[0]);

let minGap = answer[gap.indexOf(Math.min.apply(null, gap))];
let maxGap = answer[gap.indexOf(Math.max.apply(null, gap))];

console.log(minGap);
console.log(maxGap);