// 原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, 3, '4']

// 元组
let tuple: [number, string] = [1, '1']
// tuple.push(2)
// tuple(2)

// 函数
let add = (x:number, y:number) => x + y
let compute: (x:number, y:number) => number
compute = (a, b) => a + b;

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false

// undefined, null
let un: undefined = undefined
let nu: null = null

// void
let noReturn = () => {}

// any 
let x
x = 1
x = []
x = () => {}

// never
let error = () => {
    throw new Error('error')
}
let endless = () => {
    while(true) {}
}

// 数字枚举
enum Role {
    Reporter = 1,
    Developer,
    Maintainer,
    Owner,
    Guest
}

// 字符串枚举
enum Message {
    Success = '恭喜你，成功了',
    Fail = '抱歉，失败了'
}

// 异构枚举 不建议使用
enum Answer {
    N,
    Y = 'Yes'
}

// 枚举成员 
// 值可读，不可修改
enum Char {
    // const
    a,
    b = Char.a,
    c = 1 + 3,
    // computed
    d = Math.random(),
    e = '123'.length
}

// 常量枚举
const enum Month {
    Jan,
    Feb,
    Mar
}

// 枚举类型
enum E {a, b}
enum F {a = 0, b = 1}
enum G {a = 'apple', b = 'banana'}

let e: E = 3
let f: F = 3
// e === f 报错

