// ---------------------------------------------
// EVENT-DRIVEN DOM MANIPULATION (Starter)
// ---------------------------------------------
const container = document.getElementById("container");
const scoreInput = document.getElementById("scoreInput");
// STEP 1: Add Paragraph
function addParagraph() {
  // create and append a <p>
  let para = document.createElement("p");
  para.innerHTML = "This is from addParagraph function";
  para.id="mypara";
  container.appendChild(para);
}

// STEP 2: Update Paragraph
function updateParagraph() {
  // find <p> and update text
  let para = document.getElementById("mypara");
  para.innerHTML = "This is from updateParagraph function";
  //no position is needed cos its already located in doc
}

// STEP 3: Style Paragraph
function styleParagraph() {
  // change color / background / font
  let para = document.getElementById("mypara");
  // para2.style.color="red"; //Method 1
  para.classList.add("passed"); // Method 2 using a class deom CSS file (someone wrriten style already, we are just using it)
}

// STEP 4: Check Score from textbox
function checkScore() {
  // alert("I am here!"); testing onchange() from Score input in HTML file
  // 1. Read value from scoreInput
  // 2. Convert to number
  // 3. Create <p> element for result
  // 4. If score >= 50 → Passed (green)
  //    else → Failed (red)
  // 5. Append to container
  // 6. Optionally clear textbox

  // let score = document.querySelector("#scoreInput").value; OR


//Example with creating a id for result here
  // let score = Number(document.getElementById("scoreInput").value);
  // console.log(typeof(score));
  //Check if we already added a paragraph with id "studentResult"

//   let result = document.querySelector("#studentResult");
//   if(result == null){
//     //does not exist create element
//     result = document.createElement("p");
//     result.id = "studentResult";
//     container.appendChild(result);
//   }

//    // Step 1: Create
//   if(score >= 50){ //Step 2 : Customize
//   //pass
//   result.innerHTML = "Result is Pass";
//   result.classList.add("passed");
//   }
//   else{
//   //fail
//     result.innerHTML = "Result is Fail";
//     result.classList.add("failed");
//   }
// }

// Example with p id already inside the HTML container file
// Step 1: Create
let score = Number(document.getElementById("scoreInput").value);
let result = document.querySelector("#studentResult");

  if(score >= 50){ //Step 2 : Customize
  //pass
  result.innerHTML = "Result is Pass";
  result.className ="passed"; //classList was getting all styles together in same p 
  // check by console document.getElementById("studentResult").classList
  }
  else{
  //fail
    result.innerHTML = "Result is Fail";
    result.className = "failed";
  }
}

// STEP 5: Toggle Theme
function toggleTheme() {
  // switch light ↔ dark background
}

// STEP 6: Add Note with timestamp
function addNote() {
  // create <p> showing current time
}
