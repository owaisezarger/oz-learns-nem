// Creating objects and accessing properties:
const person = {
  name: "John",
  age: 25,
  greet: function () {
    console.log("Hello, " + this.name + "!");
  },
};
console.log(person.name);
person.greet();
