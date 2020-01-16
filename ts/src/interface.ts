let adds: (x: number, y: number) => number

// interface Add {
//     (x: number, y: number): number
// }

// 类型别名
type Add = (x: number, y: number) => number

let a: Add = (a, b) => a + b

// 混合类型接口
interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

// let lib: Lib = (() => {}) as Lib;
// lib.version = '1.0';
// lib.doSomething = () => {}

function getLib() {
    let lib: Lib = (() => {}) as Lib;
    lib.version = '1.0';
    lib.doSomething = () => {};
    return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();
lib2();
lib2.doSomething();