// 泛型
function log<T>(value: T): T {
    console.log(value);
    return value;
}

// 两种调用方式 推荐第二种
log<string[]>(['a', 'b'])
log(['a', 'b'])

// type Log = <T>(value: T) => T
// let myLog: Log = log

// 泛型接口
interface Log<T = string> {
    (value: T): T
}

// let myLog: Log = log
// myLog('1')