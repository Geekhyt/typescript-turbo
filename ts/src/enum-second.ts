interface List {
    readonly ids: number;
    name: string;
    age?: number;
}

interface Results {
    data: List[]
}

function renders(result: Results) {
    result.data.forEach((value) => {
        console.log(value.ids, value.name);
        if (value.age) {
            console.log(value.age);
        }
    })
}

let results = {
    data: [
        { ids: 1, name: 'A', sex: 'male' },
        { ids: 2, name: 'B', age: 10 }
    ]
}

// renders(results)

interface StringArray {
    [index: number]: string
}
let chars: StringArray = ['A', 'B']

interface Names {
    [x: string]: string
    // y: number
    // [z: number]: number
    [z: number]: string
}