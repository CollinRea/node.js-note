let square = x => x * x;

console.log(square(2));
console.log(square(3));

// example showing how arrow functions do not bind this or pass arguments
let user = {
  name: 'Collin',
  sayHi: () => {
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1,2,3);