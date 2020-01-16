class Log<T> {
    run(value: T) {
        console.log(value)
        return value
    }
}

let log1 = new Log<number>()
log1.run(1)
let log2 = new Log()
log2.run('a')

// 泛型约束
interface Length {
    length: number
}

function logs<T extends Length>(value: T): T {
    console.log(value, value.length)
    return value
}

logs([1])
log('123')
logs({length: 1})

// 1函数和类可以轻松地支持多种类型，增强程序的扩展性
// 2不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 3灵活控制类型之间的约束

