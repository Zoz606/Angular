// function age(constructor: Function) {
//   console.log('in decorator fn', constructor);
//   constructor.prototype.age = 28;
// }


// @age
// class greeting {
//   name: string;
//   message: string;
//   constructor(
//     name: string,
//     message:string
//   ) {
//     this.name = name;
//     this.message = message;
//   }
//   sayHello() {
//     console.log(`${this.message} ${this.name} ${this.age}`);
    
//   }
// }

// console.log(new greeting( 'john', 'welcome').sayHello());


// function classDecorator<T extends { new(...args: any[]): {} }>
//   (constructor: T) {
//  return class extends constructor {
//    newPropert = 'new property';
//    hello = 'override';
//  }
// }


// @classDecorator
// class greeting {
//   property = 'property';
//   hello: string;
//   constructor(m:string) {
//     this.hello = m;
//   }
// }

// console.log(new greeting('world'));
function student (config:any) {
  return function (target:any) {
    console.log(config, target);
    Object.defineProperty(target.prototype, 'course',{value: ()=> config.course})
  }
}

@student({
  course: 'angular',
})
class person {

}

console.log(new person().course());


