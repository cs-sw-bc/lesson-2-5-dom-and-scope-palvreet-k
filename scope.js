// ---------------------------------------------
// LESSON 5 – VARIABLE SCOPE STARTER FILE
// ---------------------------------------------
//
// Each button in the HTML calls one of these
// functions. Use console.log() or write output
// inside the #output div to demonstrate scope.
// ---------------------------------------------

const output = document.getElementById("output");
let training = "Software Engineering"; // This is a global variable as its outside all the functions and can be called in all the functions


// 🧩 STEP 1: GLOBAL SCOPE
// Goal: Declare a global variable and use it inside a function.
//Anything inside curly brances is a block
// let variable born , dead inside the same block
function globalScopeDemo() {
  let name= "SCOPE LESSON";
  console.log("Value of name is",name);
  console.log(training);
  //name is deleted from browser's memory at this line
  // Example: let message = "I am global!";
  // console.log() inside and outside a function
  // Observe which logs work.
}



// 🧩 STEP 2: LOCAL (FUNCTION) SCOPE
// Goal: Declare variable inside a function and try to use it outside.
function localScopeDemo() {
  console.log("Value of name is",name);
  console.log(training);
  // Example: let note = "I live inside this function!";
  // console.log(note) here works.
  // Try console.log(note) outside → should give ReferenceError.
}


// IMPORTANT - always use let
// 🧩 STEP 3: BLOCK SCOPE
// Goal: Show that let/const are block scoped and var is not
// let and const are both block scoped
function blockScopeDemo() {
  let score = 95;
  if(score>90){
    let grade = "A";     // let dies where it is supposed to die i.e. Block scoped
    var status = "pass"; // var leaks outside the block -its old JS its glitchy
  } // grade dies here
  console.log("Grade is:",grade);
  console.log("Status is: ", status)
  // Example: inside if(true){ let inside = "Block var"; }
  // console.log(inside) outside block → ReferenceError
} //status dies here at function end



// 🧩 STEP 4: VAR BEHAVIOR
// Goal: Show how var leaks out of blocks.
function varScopeDemo() {
  // Example: if(true){ var oldWay = "I escape the block!"; }
  // console.log(oldWay) → works (var ignores block)
}



// 🧱 HELPER FUNCTION (optional)
// You can use this to display results visually instead of console.
function show(text) {
  const line = document.createElement("p");
  line.textContent = text;
  output.appendChild(line);
}

globalScopeDemo()
localScopeDemo()
blockScopeDemo()
