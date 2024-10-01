                        //console
// console.log(45);
// console.log(56);


                        //comment
// // Prints 5 to the console
// console.log(5);
// console.log(5);  // Prints 5 
// console.log(/*IGNORED!*/ 5);  // Still just prints 5 

                        // DataType
// console.log('JavaScript');
// console.log(2011);
// console.log('Woohoo! I love to code! #codecademy');
// console.log(20.49);


                        //Arithemtic operator
// console.log(10 + 3.5)
// console.log(2022 - 1969);
// console.log(65 / 240);
// console.log(0.2708 * 100);

// console.log(3+4)
// // The first line of code is an arithmetic operator telling the computer to print the result of 3+4. The result will be 7
// console.log('3+4');
// // The Second is a string, telling the computer to print what is inside the parenthesis (as text). The result will be 3+4
// console.log('3'+'4');
// // The last is a combination of two strings, Telling the computer to display the string next to each other (combine) the texts. The result will be 34

// 20 goes into -5 how many times? 0 right? What is the remainder? -5 correct?
// -5 + 20 = 15, but -5 % 20 = -5
// The output is correct.
// > -5 + 20
// 15
// > -5 % 20
// -5

                //String Concatenation
// console.log('hi' + 'ya'); // Prints 'hiya'
// console.log('wo' + 'ah'); // Prints 'woah'
// console.log('I love to ' + 'code.')
// // Prints 'I love to code.'

// console.log('front ' + 'space'); 
// // Prints 'front space'
// console.log('back' + ' space'); 
// // Prints 'back space'
// console.log('no' + 'space'); 
// // Prints 'nospace'
// console.log('middle' + ' ' + 'space'); 
// // Prints 'middle space'

// console.log('One' + ', ' + 'two' + ', ' + 'three!'); 
// // Prints 'One, two, three!

// console.log('Hello' + 'World');
// console.log('Hello'+ ' ' + 'World');

// question:Can a space be at the beginning or end of a string?
// answer:Yes! Any characters you put in a string will be displayed, and space is a character just like any other.

// question:Why would we use string concatenation?
// Answer:String concatenation refers to the process of combining two or more strings into a single string. It can be done by either appending one string to another or creating a new string that contains the original strings in sequence.

// console.log('Teaching the world how to code'.length);

//question:Why would the length of a sentence be useful to know?
//answer:Knowing the length of a sentence in JavaScript helps with validation, readability, text manipulation, performance optimization, and analytics.
// For Example:let sentence = "Hello, world!";
// let length = sentence.length; // 13
// console.log(`Length: ${length}`);

// question:difference between property and method
// Ans: A property is a named attribute of an object. Properties define the characteristics of an object such as Size, Color etc. or sometimes the way in which it behaves. A method is an action that can be performed on objects.

// question:What does it mean by an instance of a data type?
//answer:Data types in programming languages are used to define variables before they are initialized. The data type specifies the way a variable will be stored in memory and the type of data the variable holds. A variable is said to be an instance of a data type.


                // built in object
// console.log(Math.random()); // Prints a random number between 0 and 1
// console.log(Math.random()*50);//To generate a random number between 0 and 50, we could multiply this result by 50, like so:
// console.log(Math.floor(Math.random() * 50));//Math.floor() takes a decimal number, and rounds down to the nearest whole number. You can use Math.floor() to round down a random number like this:
// console.log(Math.ceil(40));
// console.log(Math.floor(Math.random() * 100));
// console.log(Math.ceil(43.8));
// console.log(Number.isInteger(2017));



                                //lesson 2:Variables
                    // var
// var favoriteFood = 'pizza';
// var numOfSlices = 8;
// console.log(favoriteFood);
// console.log(numOfSlices);

                    // //let
// let price;
// console.log(price);//give output undefined
// price=30;
// console.log(price);//give output 30


// let changeMe = true;
// changeMe = false;
// console.log(changeMe);//output is false

                    //const
// const entree = 'Enchiladas';
// entree = 'Tacos'
// console.log(entree);//create error beacause constant not redeclared

                    //Mathematical Assignment Operators
// let levelUp = 10;
// let powerLevel = 9001;
// let multiplyMe = 32;
// let quarterMe = 1152;

// // Use the mathematical assignments in the space below:
// levelUp += 5;
// powerLevel -= 100;
// multiplyMe *= 11;
// quarterMe /= 4;


// // These console.log() statements below will help you check the values of the variables.
// // You do not need to edit these statements. 
// console.log('The value of levelUp:', levelUp); 
// console.log('The value of powerLevel:', powerLevel); 
// console.log('The value of multiplyMe:', multiplyMe); 
// console.log('The value of quarterMe:', quarterMe);                    



                    //String Concatenation with Variables
// let favoriteAnimal = "giraffe";
// console.log("My favorite animal: " + favoriteAnimal);//output:My favorite animal: giraffe

                    //String Interpolation
// let myName = 'Natalia';
// let myCity = 'Mexico City';

// console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

//typeof operator(is use to check the type of variable)
// let newVariable = 'Playing around with typeof.';

// console.log(typeof newVariable);

// newVariable = 1;

// console.log(typeof newVariable);



//Tesk project 1
// //declared and initialize the variable
// const kelvin = 293;
// //kelvin - 273 assigned to the celcius
// const Celsius = kelvin - 273;
// //calculate fahrenheit
// let fahrenheit = Celsius * (9/5) + 32;
// //value convert in decimal to whole number
// fahrenheit = Math.floor(fahrenheit);
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);



//project 1
// //declared and initialize the variable
// const kelvin = 0;
// //kelvin - 273 assigned to the celcius
// const celsius = kelvin - 273;
// // Convert to Newton
// let newton = celsius * (33 / 100);
// // Round down
// newton = Math.floor(newton);
// console.log(`The temperature is ${newton} degrees Newton.`);

//project 2
// //declared and initialize
// const myAge = 12;
// //declared and initialize with let keyword
// let earlyYears = 2;
// earlyYears *= 10.5;
// //declared and assigning
// let laterYears = myAge - 2;
// laterYears *= 4;
// console.log(earlyYears);
// console.log(laterYears);
// //adding earlyYears and laterYears
// let myAgeInDogYears = earlyYears + laterYears;
// //convert string into lower case letter
// let myName = ('Grace Hopper'.toLowerCase());
// console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);
