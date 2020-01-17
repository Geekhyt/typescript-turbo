// 索引类型
let objj = {
    a: 1,
    b: 2,
    c: 3
}
// 泛型约束
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

// 条件类型
// T extend U ? X : Y
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";
type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A | B) extend U ? X : Y
// (A extends U ? X : Y) | (B extends U ? X : Y)
type T3 = TypeName<string | string[]>

type Diff<T, U> = T extends U ? never : T

type T4 = Diff<"a" | "b" | "c", "a" | "e">
// Diff<"a", "a" | "e"> | Diff<"b", "a" | "e"> | Diff<"c", "a" | "e">
// never | "b" | "c"
// "b" | "c"

type NotNull<T> = Diff<T, undefined | null>
type T5 = NotNull<string | number | undefined | null>

// Exclude<T, U> 如上Diff
// NonNullable<T> 如上NotNull

// Extratct<T, U>
type T6 = Extract<"a" | "b" | "c", "a" | "e">

// RetrunType<T>
type T7 = ReturnType<() => string>