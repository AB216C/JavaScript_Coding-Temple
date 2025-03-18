
// Function declaration  

/* Functions are reusable blocks of code that perform a specific task.
Instead of writing the same code multiple times, you can wrap it in a function and call it whenever needed. 
Functions help make code more organized, reusable, and easier to maintain.
$ is used in executing variables
*/



function greet(name) {
console.log(`Hello,${name}!`)
}

greet("Katelyn")



//Function Expression

/*This a function assigned to a variable. 
This function has no name and is usually called "anonymous function" and to call it, you need a variable*/

const add = function(a,b) {
  return a + b
}

console.log(add(2,5))




//Arrow Functions:

/*Arrow functions is a shorter way of writing functions in javascript. 
They work like regular function but their work is simpler.
You’ll often see arrow functions used in modern JavaScript, 
especially when writing quick, small functions or working with arrays.
*/

const greet2 = (name) => {
  return `Hello, ${name}. Nice to meet you`
}

console.log(greet2("Eric"))



//How arrows are different:
// No function keyword: Arrow functions use => to define the function.
// Shorter code: If the function has only one line of code, 
// you can remove the {} and the return keyword—it’s implicit!


const substract = (a,b) => a - b
console.log(substract(90,41))

//Single parameter :
//In case there is only one parameter, the paranthesis can be omitted.

const sayHi = name => `hi, ${name}`

console.log(sayHi("Jack"))