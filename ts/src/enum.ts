interface List {
    id: number;
    name: string;
    // [x: string]: any;  // 索引签名
}

interface Result {
    data: List[]
}

function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
    })
}

let result = {
    data: [
        {id: 1, name: 'A'},
        {id: 2, name: 'B'}
    ]
}

// render(result)
// 类型断言
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B'}
//     ]
// }as Result)

// render(<Result>{
//     data: [
//         {id: 1, name: 'A', sex: 'male'},
//         {id: 2, name: 'B'}
//     ]
// })