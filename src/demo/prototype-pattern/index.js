// 原型模式
// 创建一个共享的原型，通过拷贝这个原型来创建新的类

class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hi! my name is ${this.name}`);
  }
}

class Programmer extends Person {
  constructor(name, profession) {
    super(name);
    this.profession = profession;
  }
  getProfession() {
    console.log(`I am a ${this.profession} by profession`);
  }
}

const Simon = new Programmer('simon', 'web');
Simon.sayHello();
Simon.getProfession();