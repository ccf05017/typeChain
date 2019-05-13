// interface example
// Typescript 위주로 사용할 때 사용
// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// class example
// React, Node 등 기존 JS 라이브러리와 연동해야할 때 사용
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const poppo = new Human("poppo", 30, "male");

const sayHi = (inputPerson: Human): string => {
  return `Hello ${inputPerson.name}, your are ${inputPerson.age}, you are a ${
    inputPerson.gender
  }`;
};

console.log(sayHi(poppo));

export {};
