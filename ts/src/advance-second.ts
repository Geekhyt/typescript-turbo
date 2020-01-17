// 交叉类型
// 看上去是取交集，实际上是取并集
interface DogInterface {
    run(): void
}

interface CatInterface {
    jump(): void
}

let pet: DogInterface & CatInterface = {
    run() {},
    jump() {}
}

// 联合类型
// 看上取是取并集，实际上是取交集
class Dog1 implements DogInterface {
    run() {}
    eat() {}
}

class Cat1 implements CatInterface {
    jump() {}
    eat() {}
}

enum Master { Boy, Girl }
function getPet(master: Master) {
    let pet = master === Master.Boy ? new Dog1(): new Cat1();
    pet.eat()
    // pet.run()
    return pet
}

