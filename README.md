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