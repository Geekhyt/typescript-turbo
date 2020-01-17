// 类型推断
let aa = 1
let bb = [1]

let c = (x = 1) => x +1

window.onkeydown = (event) => {
    // console.log(event.button)
}

// 类型断言
interface Foo {
    bar: number
}

// let foo = {} as Foo
let foo: Foo = {
    bar: 1
}
// foo.bar = 1

// 类型检查机制
// TypeScript编译器在做类型检查时，所秉承的一些原则，以及表现出的一些行为
// 作用： 辅助开发，提高开发效率
// 类型推断
// 类型断言
// 类型保护

// 类型兼容
let s: string = 'a'
s = null

// 接口兼容性
interface X {
    a: any;
    b: any;
}

interface Y {
    a: any;
    b: any;
    c: any;
}

let xx: X = { a: 1, b: 2 }
let yy: Y = { a: 1, b: 2, c: 3 } 
xx = yy
// yy = xx

// 函数兼容性
type Handler = (a: number, b: number) => void
function hof(handler: Handler) {
    return handler
}
// 函数参数
let handler1 = (a: number) => {}
hof(handler1)

let handler2 = (a: number, b: number, c: number) => {}
// hof(handler2)

// 可选参数和剩余参数
let aaa = (p1: number, p2: number) => {}
let bbb = (p1?: number, p2?: number) => {}
let ccc = (...args: number[]) => {}
aaa = bbb
aaa = ccc
bbb = aaa
bbb = ccc
ccc = aaa
ccc = bbb

// 参数类型
let handler3 = (a: string) => {}
// hof(handler3)

interface Point3D {
    x: number;
    y: number;
    z: number;
}

interface Point2D {
    x: number;
    y: number;
}

let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d
// p2d = p3d

// 返回值类型
let ff = () => ({ name: 'Alice' })
let gg = () => ({ name: 'Alice', location: 'Beijing' })
ff = gg
// gg = ff

// function overload(a: number, b: number): number;
// function overload(a: string, b: string): string;
// function overload(a: any, b: any, c: any): any{}

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 3
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple

// 类兼容性
class A {
    constructor(p: number, q: number) {}
    id: number = 1
    private name: string = ''
}
class B {
    static s = 1
    constructor(p: number) {}
    id: number = 2
    private name: string = ''
}
let aaaa = new A(1, 2)
let bbbb = new B(1)
// aaaa = bbbb
// bbbb = aaaa
class CC extends A {}
let cccc = new CC(1, 2)
aaaa = cccc
cccc = aaaa

// 泛型兼容性
interface Empty<T> {
    value: T
}
// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2

// 泛型函数
let log11 = <T>(x: T): T => {
    console.log('x')
    return x
}
let log22 = <U>(y: U): U => {
    console.log('y')
    return y
}
log11 =log22

// 当一个类型Y可以被赋值给另一个类型X时，我们就可以说类型X兼容类型Y
// X 兼容 Y: X(目标类型) = Y(源类型)
// 口诀：
// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的

// 类型保护
// TypeScript能够在特定的区块中保证变量属于某种特定的类型
// 可以在此区块中放心地引用此类型的属性，或者调用此类型的方法
enum Type { Strong, Week }

class Java {
    helloJava() {
        console.log('Hello Java')
    }
    java: any
}

class JavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript')
    }
    javascript: any
}

function isJava(lang: Java | JavaScript): lang is Java {
    return (lang as Java).helloJava !== undefined
}

function getLanguage(type: Type, x: string | number) {
    let lang = type === Type.Strong ? new Java() : new JavaScript()
    // if ((lang as Java).helloJava) {
    //     (lang as Java).helloJava()
    // } else {
    //     (lang as JavaScript).helloJavaScript()
    // }
    // 1.instanceof
    // if (lang instanceof Java) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }
    // 2.in
    // if ('java' in lang) {
    //     lang.helloJava()
    // } else {
    //     lang.helloJavaScript()
    // }
    // 3.typeof
    // if (typeof x === 'string') {
    //     x.length
    // } else {
    //     x.toFixed(2)
    // }
    // 4. 自定义函数
    if (isJava(lang)) {
        lang.helloJava()
    } else {
        lang.helloJavaScript()
    }
    return lang
}

// getLanguage(Type.Strong)