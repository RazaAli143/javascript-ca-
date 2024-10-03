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


                                //LESSON 3:
                            //Conditional Statements
// let sale = true;
// sale = false;
// if (sale) {
//   console.log('Time to buy!');
// }

                            // If...Else Statements
// let sale = true;

// sale = false;

// if (sale) {
//   console.log('Time to buy!');
// } else {
//   console.log('Time to wait for a sale.')
// }

                            // Comparison Operators
// let hungerLevel = 7;
// if(hungerLevel>7){
//     console.log('Time to eat!');
// }else{
//   console.log('We can eat later!');
// }

                            // Logical Operators
// let mood = 'sleepy';
// let tirednessLevel = 6;
// if(tirednessLevel>8){
//   console.log("mood is sleepy");
// }

                            // Truthy and Falsy
// let wordCount = 1;

// if (wordCount) {
//   console.log("Great! You've started your work!");
// } else {
//   console.log('Better get to work!');
// }


// let favoritePhrase = '';

// if (favoritePhrase) {
//   console.log("This string doesn't seem to be empty.");
// } else {
//   console.log('This string is definitely empty.');
// }



                            // FALSY AND TRULY VALUES.
// 0
// null
// undefined
// NaN
// ''
// 0n
// -0
// these are all falsy values others all values are truly values empty array, empty object


// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(''));
// console.log(Boolean(0n));
// console.log(Boolean(-0));

                            // another example
// let tool = '';

// // Use short circuit evaluation to assign  writingUtensil variable below:
// let writingUtensil = "pen"||"tool";

// console.log(`The ${writingUtensil} is mightier than the sword.`);


//Ternary Operator
// let isLocked = false;

// if (isLocked) {
//   console.log('You will need a key to open the door.');
// } else {
//   console.log('You will not need a key to open the door.');
// }

// let isCorrect = true;

// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

// let favoritePhrase = 'Love That!';

// if (favoritePhrase === 'Love That!') {
//   console.log('I love that!');
// } else {
//   console.log("I don't love that!");
// }

                    // Else If Statements
// let season = 'summer';

// if (season === 'spring') {
//   console.log('It\'s spring! The trees are budding!');
// } else if(season === 'winter') {
//   console.log('It\'s winter! Everything is covered in snow.');
// } else if(season === 'fall') {
//   console.log('It\'s fall! Leaves are falling!');
// } else if(season === 'summer') {
//   console.log('It\'s sunny and warm because it\'s summer!');
// } else {
//   console.log('Invalid season.');
// }

                    //The switch keyword
// let athleteFinalPosition = 'first place';

// switch(athleteFinalPosition){
//   case 'first place':
//     console.log('You get the gold medal!');
//     break;
//   case 'second place':
//     console.log('You get the silver medal!');
//     break;
//   case 'third place':
//     console.log('You get the bronze medal!');
//     break;
//   default:
//     console.log('No medal awarded.');
//     break;
// }



                                                //LESSON 4:
                                         // function declaration:
// function getReminder(){
//     console.log(102%5);
//     console.log('Water the plants.')
//   }
//   getReminder();
//   function greetInSpanish(){
//     console.log('Buenas tardes.');
//   }
//   greetInSpanish()


                                         // Calling a Function
// function sayThanks(){
//     console.log('Thank you for your purchase! We appreciate your business.');
//   }
  
//   sayThanks();
//   sayThanks();
//   sayThanks();


                                        //Parameters and Arguments
// function sayThanks(name) {
//     console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
//   }
  
//   sayThanks('Cole');

//Default Parameters
// function greeting (name = 'stranger') {
//     console.log(`Hello, ${name}!`)
//   }
  
//   greeting('Nick') // Output: Hello, Nick!
  //greeting() // Output: Hello, stranger!
//  another example of default paramter
// function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs' ){
//     console.log(`Remember to buy ${item1}`);
//     console.log(`Remember to buy ${item2}`);
//     console.log(`Remember to buy ${item3}`);
//   }
  

                                        //RETURN
// function rectangleArea(width, height) {
//     let area = width * height;
//     return area;
//   }
//   console.log(rectangleArea(5, 7))

// // another example of return
//   function monitorCount(rows, columns) {
//     return rows * columns;
//   }
  
//   const numOfMonitors = monitorCount(5, 4);
  
//   console.log(numOfMonitors);
  
                                                // //Helper Functions
// function x(r,c){
//     return r+c;
// };
// function y(r,c){//helper function
//     return x(r,c) * 100;
// }
// const z = y(2,2);
// console.log(z);

// //another example
// function monitorCount(rows, columns) {
//     return rows * columns;
//   }
  
//   function costOfMonitors(rows, columns) {
//    return monitorCount(rows, columns)  * 200;
//   }
  
//   const totalCost = costOfMonitors(5, 4);
  
//   console.log(totalCost);


// Function Expressions
// A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
//is may jo variable hota hai wo as a identifier work karta hai.
// const plantNeedsWater = function(day){//is may pantneedwater as a identifier work kar raha hai
//     if(day === 'Wednesday'){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
//   plantNeedsWater('Tuesday');
//   console.log(plantNeedsWater('Tuesday'));



//Arrow Functions
// const rectangleArea = (width, height) => {
//     let area = width * height;
//     return area;
//   };

//another example of arrow function
// const plantNeedsWater = (day) => {
//     if (day === 'Wednesday') {
//       return true;
//     } else {
//       return false;
//     }
//   };
  


                                    // Concise Body Arrow Functions
// const plantNeedsWater = day => day === 'Wednesday' ? true : false;

                                                // LESSON 5
                                            // Blocks and Scope
// const city = 'New York City';
// const logCitySkyline = () => {
//   let skyscraper = 'Empire State Building';
//   return 'The stars over the ' + skyscraper + ' in ' + city;

// }
// console.log(logCitySkyline());

                                            //another example
// const satellite = 'The Moon';
// const galaxy = 'The Milky Way';
// const stars = 'North Star';
// const callMyNightSky = () => {
//   return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
// }
// console.log(callMyNightSky());

                                                //block scope
// const logSkyColor = () => {
//     let color = 'blue'; 
//     console.log(color); // Prints "blue"
//   };
  
//   logSkyColor(); // Prints "blue"
//   console.log(color); // throws a ReferenceError

                                        //another example of block
// const logVisibleLightWaves = () => {
//     const lightWaves = 'Moonlight';
//     console.log(lightWaves);
//   };
  
  
//   logVisibleLightWaves();
  
//   //console.log(lightWaves);

                                            //scope pollution
// let num = 50;

// const logNum = () => {
//   num = 100; // Take note of this line of code
//   console.log(num);
// };

// logNum(); // Prints 100
// console.log(num); // Prints 100


                                        // Practice Good Scoping
// const logVisibleLightWaves = () => {
//     let lightWaves = 'Moonlight';
//       let region = 'The Arctic';
//     // Add if statement here:
//     if(region === 'The Arctic'){
//       let lightWaves = 'Northern Lights';
//       console.log(lightWaves);
//     }
  
//     console.log(lightWaves);
//     console.log()
    
//   };
  
//   logVisibleLightWaves();

// Leeson 6
// Create an Array
// const hobbies = ['kayaking', 'snowboarding', 'napping'];

// console.log(hobbies);


                                  // Accessing Elements
// const hello = 'Hello World';
// console.log(hello[7]);
// Output: W

                              //another example Accessing Elements
// const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

// const listItem = famousSayings[0];

// console.log(famousSayings[2]);

// console.log(famousSayings[3]);


                                  // Update Elements
// let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

// seasons[3] = 'Autumn';
// console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']

// another example
// let groceryList = ['bread', 'tomatoes', 'milk'];

// groceryList[1] = 'avocados'; 

                              // Arrays with let and const
// let sampleArr = [1, 2, 3];
// sampleArr = ['a string'];
// console.log(sampleArr);

//another example
// let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

// const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

// condiments[0] = 'Mayo';

// console.log(condiments);

// condiments = ['Mayo'];
// console.log(condiments);

// utensils[3] = 'Spoon';
// console.log(utensils);


                            //this is simple to find the length of string 
// let x = 'hello world';
// console.log(x.length);

                                // The .length property
// const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];

// console.log(newYearsResolutions.length);
// // Output: 2

                                    //another example
// const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

// console.log(objectives.length);


                                  // The .push() Method
// const itemTracker = ['item 0', 'item 1', 'item 2'];

// itemTracker.push('item 3', 'item 4');

// console.log(itemTracker); 
// // Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];


                                //another example
// const chores = ['wash dishes', 'do laundry', 'take out trash'];
// chores.push('item4','item5');
// console.log(chores);


                                // The .pop() Method:
// const newItemTracker = ['item 0', 'item 1', 'item 2'];

// const removed = newItemTracker.pop();

// console.log(newItemTracker); 
// // Output: [ 'item 0', 'item 1' ]
// console.log(removed);
// // Output: item 2


                              //another example
// const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
// chores.pop();
// console.log(chores);


//More Array Methods
// const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// groceryList.shift();

// console.log(groceryList);

// groceryList.unshift('popcorn');

// console.log(groceryList);

// console.log(groceryList.slice(1, 4));

// console.log(groceryList);

// const pastaIndex = groceryList.indexOf('pasta');

// console.log(pastaIndex);



                                            // Arrays and Functions
// const flowers = ['peony', 'daffodil', 'marigold'];

// function addFlower(arr) {
//   arr.push('lily');
// }

// addFlower(flowers);

// console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']


                                          //another example
// const x = [1,2,3,4,5];
// function add(rr){
//   rr.push(7);
// }
// add(x);
// console.log(x);


                                          //another example
// const concept = ['arrays', 'can', 'be', 'mutated'];

// function changeArr(arr){
//   arr[3] = 'MUTATED';
// }

// changeArr(concept);
// console.log(concept);

// function removeElement(newArr){
//    x = newArr.pop();
// }
// removeElement(concept);
// console.log(concept);
// console.log(x);


                                            // Nested Arrays
// const nestarr = [[1,2],[3,4]];
// // console.log(nestarr[0][0]);//go to the array of 0 index and print the element of array 0 index 0
// console.log(nestarr[1][1]);


                                          //another example
// const numberClusters = [[1,2],[3,4],[5,6]];
// const target = numberClusters[2][1];


                                                //LESSON 7:
                                                  // LOOP
                                                //for loop
// Write your code below
// for(let x = 5; x < 11; x++){
//   console.log(x);
// }

                                          //Looping in Reverse
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
// for (let counter = 0; counter < 4; counter++){
//   console.log(counter);
// }

// for (let counter = 3; counter >= 0; counter--){
//   console.log(counter);
// }


                                          //Looping through Arrays
// const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
// for (let i = 0; i < animals.length; i++){
//   console.log(animals[i]);
// }

                                          //another example
// const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// // Write your code below
// for (let i = 0; i < vacationSpots.length; i++ ){
//   console.log('I would love to visit ' + vacationSpots[i]);
// }


                                          // Nested Loops
// const x = [1,2,3,4,5];
// const y =[3,4,5,5,6,7,8];
// for(let i = 0; i < x.length; i++){
//   for(let j = 0; j < y.length; j++){
//     if(x[i] === y[j]){
//       console.log('this is the same number' + x[i]);
//     }
//   }
// }

//another example same to the previuos example.
// const myArray = [6, 19, 20];
// const yourArray = [19, 81, 2];
// for (let i = 0; i < myArray.length; i++) {
//   for (let j = 0; j < yourArray.length; j++) {
//     if (myArray[i] === yourArray[j]) {
//       console.log('Both arrays have the number: ' + yourArray[j]);
//     }
//   }
// }

//                                          //another example
// const bobsFollowers = ['friend1','friend2','friend3','friend4'];
// const tinasFollowers = ['friend1','friend2','friend'];
// const mutualFollowers = [];
// for(let i=0;i<bobsFollowers.length;i++){
//   for(let j=0;j<tinasFollowers.length;j++){
//     if(bobsFollowers[i] === tinasFollowers[j]){
//       // console.log(bobsFollowers[i]);
//       mutualFollowers.push(bobsFollowers[i]);
//       console.log(mutualFollowers);
//     }
    
//   }
// }

                                                //while loop
// A for loop that prints 1, 2, and 3
// for (let counterOne = 1; counterOne < 4; counterOne++){
//   console.log(counterOne);
// }

// // A while loop that prints 1, 2, and 3
// let counterTwo = 1;
// while (counterTwo < 4) {
//   console.log(counterTwo);
//   counterTwo++;
// }

                                        //another example but not understand
// const cards = ['diamond', 'spade', 'heart', 'club'];

// // Write your code below
// let currentCard;

// while (currentCard !== 'spade') {
//   currentCard = cards[Math.floor(Math.random() * 4)];
// 	console.log(currentCard);
// }

                                                //do while loop
//write the code below
// let cupsOfSugarNeeded = 3;
// let cupsAdded = 0;

// do{
//   cupsAdded++
//   console.log(cupsAdded + 'cup was added');
// }while(cupsAdded < cupsOfSugarNeeded);


                                              // The break Keyword
// for (let i = 0; i < 99; i++) {
//   if (i > 2 ) {
//      break;//agar hum break nhi lagahay gay tu loop 99 time chalay ga.
//   }
//   console.log('Banana.');
// }

// console.log('Orange you glad I broke out the loop!');

                                                  //another example
//this code us run by one time because its has break keyword.
// const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
// for(let i=0;i<rapperArray.length;i++){
//   console.log(rapperArray[i]);
//   console.log("And if you don't know, now you know.");
//   console.log('Notorious B.I.G.');
//   break;
// }


//LESSON 8:
// Higher-Order Functions
// for (let i = 1; i <= 3; i++) {
//   console.log(i);
// }


// Functions as Data
// const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
//   for(let i = 1; i <= 1000000; i++) {
//     if ( (2 + 2) != 4) {
//       console.log('Something has gone very wrong :( ');
//     }
//   }
// };

// // Write your code below
// const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
// isTwoPlusTwo();
// console.log(isTwoPlusTwo.name);

// const higherOrderFunc = param => {
//   param();
//   return `I just invoked ${param.name} as a callback function!`
// }
 
// const anotherFunc = () => {
//   return 'I\'m being invoked by the higher-order function!';
// }

// higherOrderFunc(anotherFunc);


                                        //example of higher order gunction
// const arr  = [1,2,3,4];
// const arr2 = [];
// for(let i = 0; i < arr.length; i++){
//   arr2.push(arr[i] * 2);
// }
// console.log(arr2);


                                          // LESSON 9:
                                // Introduction to Iterators
                                  // The .forEach() Method
// const x = [1,2,3,4,5];
// x.forEach( x) => {
//   console.log(x);
// })

                               // //another example
// const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// // Iterate over fruits below
// fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))


                                // The .map() Method

// const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// // Create the secretMessage array below
// const secretMessage = animals.map(animal => animal[0]);

// console.log(secretMessage.join(''));

// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
// const smallNumbers = bigNumbers.map(num => num/100);

// console.log(smallNumbers)


                                //The .filter() Method
// const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// // Call .filter() on randomNumbers below


// const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// // Call .filter() on favoriteWords below


                              //The .findIndex() Method
// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(animal => {
//   return animal === 'elephant';
// });

// const startsWithS = animals.findIndex(animal => {
//   return animal[0] === 's' ? true : false;
// });


                              //The .reduce() Method
// const numbers = [1, 2, 4, 10];

// const summedNums = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue
// })

// console.log(summedNums) // Output: 17

                           // Iterator Documentation
// const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// // Something is missing in the method call below

// console.log(words.some(word => {
//   return word.length < 6;
// }));

                          // // Use filter to create a new array
// const interestingWords = words.filter((word) => {return word.length > 5});


// // Make sure to uncomment the code below and fix the incorrect code before running it

// console.log(interestingWords.every((word) => {return word.length > 5}));


                        // Choose the Right Iterator
// const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

// const nums = [1, 50, 75, 200, 350, 525, 1000];

// //  Choose a method that will return undefined
// cities.method(city => console.log('Have you visited ' + city + '?'));

// // Choose a method that will return a new array
// const longCities = cities.method(city => city.length > 7);

// // Choose a method that will return a single value
// const word = cities.method((acc, currVal) => {
//   return acc + currVal[0]
// }, "C");

// console.log(word)

// // Choose a method that will return a new array
// const smallerNums = nums.method(num => num - 5);

// // Choose a method that will return a boolean value
// nums.method(num => num < 0);


                                          // LESSON 10
                                  // Introduction to Objects
// let spaceship = {
//   homePlanet: 'Earth',
//   color: 'silver'
// };
// console.log(spaceship.homePlanet); // Returns 'Earth',
// console.log(spaceship.color); // Returns 'silver',

                                  // Accessing Properties
// let spaceship = {
//   homePlanet: 'Earth',
//   color: 'silver',
//   'Fuel Type': 'Turbo Fuel',
//   numCrew: 5,
//   flightPath: ['Venus', 'Mars', 'Saturn']
// };

// // Write your code below

// let crewCount = spaceship.numCrew;

// let planetArray = spaceship.flightPath;

// Bracket Notation to access the object

                                          // Bracket Notation(2nd method to access the object)
// let spaceship = {
//   'Fuel Type': 'Turbo Fuel',
//   'Active Duty': true,
//   homePlanet: 'Earth',
//   numCrew: 5
// };
// console.log(spaceship['Active Duty']);   // Returns true
// console.log(spaceship['Fuel Type']);   // Returns  'Turbo Fuel'
// console.log(spaceship['numCrew']);   // Returns 5
// console.log(spaceship['!!!!!!!!!!!!!!!']);   // Returns undefined


//another example
// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   'Active Mission' : true,
//   homePlanet : 'Earth', 
//   numCrew: 5
//  };

// let propName =  'Active Mission';


// // Write your code below

// let isActive = spaceship['Active Mission'];

// console.log(spaceship[propName]);

// //2nd method to find the output
// // console.log(spaceship[propName]);

                                        // Property Assignment
// const spaceship = {
//   'Fuel Type': 'Turbo Fuel',
//   homePlanet: 'Earth',
//   mission: 'Explore the universe' 
// };
// console.log(spaceship["Fuel Type"]); 
// console.log(delete spaceship.mission);  // Removes the mission property

                                      //another example
// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth',
//   color: 'silver',
//   'Secret Mission' : 'Discover life outside of Earth.'
// };

// // Write your code below

// console.log(spaceship.color = 'glorious gold');

// console.log(spaceship.numEngines = 9);

// console.log(delete spaceship['Secret Mission']);//this  is use to delete the object and give answer in true form


                                    // Methods in Objects
// let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// // Write your code below
// let alienShip = {
//   retreat(){
//     console.log(retreatMessage);
//   },
//   takeOff(){
//     console.log('Spim... Borp... Glix... Blastoff!');
//   }
// };
// alienShip.retreat();
// alienShip.takeOff();



                                                // Nested Objects
// let spaceship = {
//   passengers: [{name: 'Space Dog'}], 
//   telescope: {
//     yearBuilt: 2018,
//     model: "91031-XLT",
//     focalLength: 2032 
//   },
//   crew: {
//     captain: { 
//       name: 'Sandra', 
//       degree: 'Computer Engineering', 
//       encourageTeam() { console.log('We got this!') },
//      'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
//   },
//   engine: {
//     model: "Nimbus2000"
//   },
//   nanoelectronics: {
//     computer: {
//       terabytes: 100,
//       monitors: "HD"
//     },
//     'back-up': {
//       battery: "Lithium",
//       terabytes: 50
//     }
//   }
// }; 

// let capFave = spaceship.crew.captain['favorite foods'][0];

// let firstPassenger = spaceship.passengers[0];

                                            // Pass By Reference
// const spaceship = {
//   homePlanet : 'Earth',
//   color : 'silver'
// };
 
// let paintIt = obj => {
//   obj.color = 'glorious gold'
// };
 
// paintIt(spaceship);
 
// spaceship.color // Returns 'glorious gold'
 

                                          //another example
// let spaceship = {
//   'Fuel Type' : 'Turbo Fuel',
//   homePlanet : 'Earth'
// };

// // Write your code below

// let greenEnergy = obj => {
//   obj['Fuel Type'] = 'avocado oil';
// }

// let remotelyDisable = obj => {
//   obj.disabled = true;
// }

// greenEnergy(spaceship);

// remotelyDisable(spaceship);

// console.log(spaceship)


                                              //Looping Through Objects
// let spaceship = {
//   crew: {
//   captain: { 
//       name: 'Lily', 
//       degree: 'Computer Engineering', 
//       cheerTeam() { console.log('You got this!') } 
//       },
//   'chief officer': { 
//       name: 'Dan', 
//       degree: 'Aerospace Engineering', 
//       agree() { console.log('I agree, captain!') } 
//       },
//   medic: { 
//       name: 'Clementine', 
//       degree: 'Physics', 
//       announce() { console.log(`Jets on!`) } },
//   translator: {
//       name: 'Shauna', 
//       degree: 'Conservation Science', 
//       powerFuel() { console.log('The tank is full!') } 
//       }
//   }
// }; 

// // Write your code below

// for (let crewMember in spaceship.crew) {
// console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
// };

// for (let crewMember in spaceship.crew) {
// console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
// };


















