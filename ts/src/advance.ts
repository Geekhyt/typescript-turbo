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

