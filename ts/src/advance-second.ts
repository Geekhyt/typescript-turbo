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

interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: 'circle';
    r: number
}
type Shape = Square | Rectangle | Circle

function area(s: Shape){
    switch (s.kind) {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.height * s.width;
        case "circle":
            return Math.PI * s.r * 2;
        default: 
            return ((e: never) => {throw new Error(e)})(s)
    }
}
console.log(area({kind: 'circle', r: 1}))