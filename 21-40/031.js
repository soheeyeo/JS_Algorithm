// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

// 1)  arr[i]
// 2)  arr.push(5)
// 3)  arr.slice()
// 4)  arr.pop()
// 5)  arr.includes(5)

3, 5

// arr.slice()는 배열을 복사하여 새로운 객체를 만드는 함수. O(n)

// arr.includes(5)는 배열 안에 5를 포함하는지 확인하는 함수. 처음부터 하나씩 검사. O(n)