CONCATINATION:
This process of appending one string to another is called concatination.
Preview: Docs Strings are any grouping of characters (letters, spaces, numbers, or symbols) surrounded by quotes or backticks.
concatenation.


Q: what is the mean of instance of datatype.
A.Data types in programming languages are used to define variables before they are initialized. The data type specifies the way a variable will be stored in memory and the type of data the variable holds. A variable is said to be an instance of a data type.
Is my opinion.
datatype variable ko define kartay hai initializing say pahlay.datatype specify karta hai kay variable kis lahaz say memoery may store ho ga os ki type kaya ho gi.



ARITHEMETIC OPERATOR:

operator is a character that performs a task in our code. JavaScript has several built-in arithmetic operators, that allow us to perform mathematical calculations on numbers. These include the following operators and their corresponding symbols:

Add: +
Subtract: -
Multiply: *
Divide: /
Remainder: %


VARIABLE:
Variables hold reusable data in a program and associate it with a name.
Variables are stored in memory.


LESSON 3:
CONDITIONAL STATEMENT:
conditional statement checks a specific condition(s) and performs a task based on the condition(s).


FALSY AND TRULY VALUES.
0
null
undefined
NaN
''
0n
-0
these are all falsy values others all values are truly values empty array, empty object



LESSON 4:
STATEMENT:
In JavaScript, a statement is a unit of code that performs a specific action or task.

FUNCTION:
Functions are reusable pieces of code that perform tasks, process data, and possibly return values.

Function Declarations:
consist of three things.
1.The function keyword.
2.The name of the function, or its identifier, followed by parentheses.
3.A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.


CALL A FUNCTION:
Functions are reusable pieces of code that perform tasks, process data, and possibly return values.


DEFAULT PARAMETER:
function greeting (name = 'stranger') {
    console.log(`Hello, ${name}!`)
  }
  
  greeting('Nick') // Output: Hello, Nick!
  greeting() // Output: Hello, stranger!
//   explanation of this default parameter code
1.In the example above, we used the = operator to assign the parameter name a default value of 'stranger'. This is useful to have in case we ever want to include a non-personalized default greeting!
2.When the code calls greeting('Nick') the value of the argument is passed in and, 'Nick', will override the default parameter of 'stranger' to log 'Hello, Nick!' to the console.
3.When there isn’t an argument passed into greeting(), the default value of 'stranger' is used, and 'Hello, stranger!' is logged to the console.



RETURN KEYWORD:.
The return keyword is powerful because it allows functions to produce an output. We can then save the output to a variable for later use.

FUNCTION EXPRESSION:
Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. In a function expression, the function name is usually omitted. A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.

ARROW FUNCTION:
is may arrow ka symbol => function ki body ko point karta hai.
Arrow function expressions were introduced in ES6. These expressions are a clean and concise alternative to the traditional function syntax.

ARROW FUNCTION WITH DIFFERENT PARAMETER;
const functionName = () => {};
const functionName = one parameter with no brackets => {};
const functionName = (parameterone,parametertwo) => {};


LESSON 5:
vARIABBLES:
Variables are used to store a piece of data at a named location in memory.

WINDOWS:
The window object is the global object of JavaScript and represents the browser window.

BLOCKS AND SCOPE;
=>A block is the code found inside a set of curly braces {}.
=>Blocks help us group one or more statements together and serve as an important structural marker for our code.

GLOBAL SCOPE:
In global scope, variables are declared outside of blocks. These variables are called global variables. 
Because global variables are not bound inside a block, they can be accessed by any code in the program, including code in blocks.


LOCAL VARIABLE:
Variables that are declared with block scope are known as local variables because they are only available to the code


SETS:
A Set is a special object that stores unique values without a key.









Scope pollution






LESSON 6:

Arrays:
Array can store any datatyoe and string()
(OR)
Arrays are lists of ordered, stored data that can be of any data type.
1.The array is represented by the square brackets [] and the content inside.
2.Each content item inside an array is called an element.

CODE SNIPPETS:
Code snippets are small blocks of reusable code that you can add to a code file. Snippets usually contain often-used code blocks such as Try... Finally or If... Else blocks.


.length
1. Returns the number of characters in a string.
2. One of an array’s built-in properties is length and it returns the number of items in the array.


The .push() Method:
Adds one or more elements to the end of the array and returns the new length


The .pop() Method:
Removes the last element of an array, decrements the array length, and returns the value that it removed.


Nested Arrays:
Array can store other arrays. When an array contains another array it is known as a nested array. Examine the example below:

const nestedArr = [[1], [2, 3]];


LESSON 7:
LOOP:
A loop is a programming tool that is used to repeat a set of instructions.

break keyword:
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');


LESSON 8:
HIGHER ORER FUNCTION:

FUNCTION:
Functions are reusable pieces of code that perform tasks, process data, and possibly return values.

LESSON 9:
Q:What is the mean of invoke argument function.
A:The code inside a function is not executed when the function is defined. The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function".

LESSON 9:
iteration methods:
The built-in JavaScript array methods that help us iterate are called iteration methods

LESSON 10:
OBJECTS:
Two ways to access the objects.
1.dot operator.(.)
2.Bracket Notation['']


IMPORTANT THING FOR OBJECT
console.log(delete spaceship['Secret Mission']);//this  is use to delete the object and give answer in true form

