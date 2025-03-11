// Complete the Numbers class below
// the constructor has already been provided
    //data can either be a string or an array of numbers

class Numbers {
  constructor(data) {
    if (typeof data === "string") {
      this.data = data.split(",").map((number) => Number(number));
    } else {
      this.data = data;
    }
  }
  count(){
    //return the count of numbers in data
    return this.data.length;
  }

  printNumbers() {
    //print the numbers in data
    this.data.forEach((num)=> console.log(num));
  }

  odds() {
    //return the odd numbers in data
    return this.data.filter(num => num % 2 !==0);
  }

  evens() {
    //return the even numbers in data
    return this.data.filter(num => num % 2 === 0);
  }

  sum() {
    //return the sum of the numbers
    return this.data.reduce((sum, num) => sum + num,0);
  }

  product() {
    //return the product of the numbers
    return this.data.reduce((product, num) => product * num, 1);
  }

  greaterThan(target) {
    //return the numbers greater than the target
    return this.data.filter(num => num > target);
  }

  howMany(target) {
    //return the count of a given number
    return this.data.filter(num => num === target).length;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("Enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log("The amount of numbers present is", n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log("The odd numbers are:", n1.odds()); //returns odd numbers
console.log("The even numbers are:", n1.evens()); //returns even numbers
console.log("The sum is:", n1.sum()); //returns sum of numbers
console.log("The product is:", n1.product()); //returns product of numbers
console.log("These numbers are greater:", n1.greaterThan(3)); //returns numbers greater than another number
console.log("There are this many of this number:", n1.howMany(3)); //return the count of a specific number
