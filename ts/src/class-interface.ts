interface Human {
    name: string;
    eat(): void;
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string
    eat() {}
}

interface Man extends Human {
    run(): void
}

interface Child {
    cry(): void
}

// 接口继承接口
interface Boy extends Man, Child {}

let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {}
}

// 接口继承类
class Auto {
    state = 1
    // private state2 = 0
}

interface AutoInterface extends Auto {

}

class C implements AutoInterface {
    state =1
}

class Bus extends Auto implements AutoInterface {

}

// 1接口之间是可以相互继承的
// 2类之间也可以相互继承
// 3接口可以通过类来实现 但是接口只能约束类的公有成员 implements(public)
// 4接口也可以抽离出类的成员 extends(public, private, protected)

