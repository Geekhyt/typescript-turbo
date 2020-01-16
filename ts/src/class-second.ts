// 抽象类
abstract class Animal {
    eat() {
        console.log('eat')
    }
    abstract sleep(): void
}
// let animal = new Animal()

class Cat extends Animal {
    constructor(name: string) {
        super()
        this.name = name
    }
    name: string
    run () {}
    sleep () {
        console.log('cat sleep')
    }
}
let cat = new Cat('miaomiao')
cat.eat();

//多态
class Cats extends Animal {
    sleep() {
        console.log('Cat sleep')
    }
}

let cats = new Cats()

let animals: Animal[] = [cat, cats]
animals.forEach(i => {
    i.sleep()
})

class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}
new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
    next() {
        return this;
    }
}
new Myflow().next().step1().next().step2()