// 索引类型
let objj = {
    a: 1,
    b: 2,
    c: 3
}

function getValues<T, K extends keyof T>(objj: T, keys: K[]): T[K][] {
    return keys.map(key => objj[key])
}
console.log(getValues(objj, ['a', 'b']))
// console.log(getValues(obj, ['e', 'f']))

// keyof T
interface Obj {
    a: number,
    b: string 
}
let key: keyof Obj

// T[k]
let value: Obj['a']

// T extends U
// 如上改造


// 映射类型
interface Obj1 {
    a: string;
    b: number;
    c: boolean;
}

// 同态类型
type ReadonlyObj = Readonly<Obj1>

type PartialObj = Partial<Obj1>

type PickObj = Pick<Obj1, 'a' | 'b'>

// 非同态类型
type RecordObj = Record<'x' | 'y', Obj1>