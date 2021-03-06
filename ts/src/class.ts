class Dog {
    constructor(name: string) {
        this.name = name
    }
    name: string
    run() {}
    private pri() {}
    protected pro() {}
    readonly legs: number = 4
    static food: string = 'bones'
}
console.log(Dog.prototype) // {run: f, constructor: f}
let dog = new Dog('wangwang');
console.log(dog) // Dog {name: 'wangwang'}
// dog.pro()
console.log(Dog.food)
// console.log(dog.food)

// 类的继承
class Husky extends Dog {
    constructor (name: string, public color: string) {
        super(name)
        this.color = color;
        // this.pri()
        this.pro()
    }
    // color: string
}
console.log(Husky.food)