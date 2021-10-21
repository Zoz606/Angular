"use strict";
// function age(constructor: Function) {
//   console.log('in decorator fn', constructor);
//   constructor.prototype.age = 28;
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function student(config) {
    return function (target) {
        console.log(config, target);
        Object.defineProperty(target.prototype, 'course', { value: function () { return config.course; } });
    };
}
var person = /** @class */ (function () {
    function person() {
    }
    person = __decorate([
        student({
            course: 'angular',
        })
    ], person);
    return person;
}());
console.log(new person().course());
