// 다음과 같이 노드의 연결 관계가 주어집니다. 
// 입력으로는 경로를 구할 두 정점의 번호가 공백으로 구분되어 주어집니다. 
// 우리는 이 두 정점으로 가기 위한 최대 거리를 구하고자 합니다. 

// 최대 거리란, 정점의 중복 없이 한 정점에서 다른 정점까지 경유할 수 있는 가장 많은 간선의 수를 뜻합니다.

// 데이터
// graph = {1: [2, 3, 4],
// 			2: [1, 3, 4, 5, 6],
// 			3: [1, 2, 7],
// 			4: [1, 2, 5, 6],
// 			5: [2, 4, 6, 7],
// 			6: [2, 4, 5, 7],
// 			7: [3, 5, 6]}


// 입력
// 1 7

// 출력
// 6

const graph = {
    1: [2, 3, 4],
    2: [1, 3, 4, 5, 6],
    3: [1, 2, 7],
    4: [1, 2, 5, 6],
    5: [2, 4, 6, 7],
    6: [2, 4, 5, 7],
    7: [3, 5, 6]
};

const d = prompt('입력해주세요.').split(' ');

const start = parseInt(d[0], 10);
const end = parseInt(d[1], 10);

let queue = [start];
let visited = [];

function route(n, visited) {
    let node = n[n.length-1];
    let length = 0;

    if (node == end){
        return visited.length;
    }
    if (visited.includes(node)){
        return visited.length;
    } else {
        visited.push(node);
    }

    let max = [];

    for (let next in graph[node]){
        n.push(graph[node][next]);
        max.push(length, route(n, visited));
        length = Math.max.apply(null, max);

        queue.pop();
    }
    return length;
}

console.log(route(queue, visited));