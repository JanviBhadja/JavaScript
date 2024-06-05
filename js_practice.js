//reduce

const num = [1, 2, 3, 4, 5];
const sum = num.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of numbers:", sum);
console.log("numbers:", num);

//filter

const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(num => num % 2 == 0);
console.log("Even numbers:", even)

//map

const number = [1, 2, 3, 4, 5];
const squared = number.map(num => num ** 2);
console.log("number:", squared);

//splice

let fruits = ["apple", "banana", "cherry", "date"];
// fruits.splice(2, 1);
fruits.splice(2, 1, 'Orange')
console.log("Updated fruits:", fruits);

//indexOf

const fruit = ["apple", "banana", "cherry", "date"];
const index = fruit.indexOf("cherry");
console.log("Index of 'cherry':", index);

//slice

const fruits_1 = ["apple", "banana", "cherry", "date"];
const sliced = fruits_1.slice(1, 3);
console.log("Sliced fruits:", sliced);
console.log("fruits_1:", fruits_1);

//concat

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const array = arr1.concat(arr2);
const array1 = arr2.concat(arr1);
const array2 = arr1.concat(arr1);
console.log("array:", array); 
console.log("array:", array1); 
console.log("array:", array2);


//Array

let cars = ["Saab", "Volvo", "BMW"];
console.log(cars)

const car = [];
car[0] = "Saab";
car[1] = "Volvo";
console.log(car)

car= car[0]
console.log(car)

fruits= ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log("I like", fruits[i]);
}


class Parent {
    constructor(name){
        this.name = name;
    }
parentMethod(){
    console.log(`parent method calling by ${this.name}`);
    }
}
  
class Child extends Parent {
    constructor(name, age){
        super(name);
        this.age = age;
    }
    
childMethod(){
    console.log(`child method calling by ${this.name} and ${this.age}.`);
    }
}

const childObj = new Child("Janvi", 21);

childObj.parentMethod();
childObj.childMethod();
