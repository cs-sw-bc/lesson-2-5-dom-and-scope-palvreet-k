// ---------------------------------------------
// PHASE 1 – DIRECT DOM MANIPULATION
// ---------------------------------------------
//
// This code runs automatically when page loads.
// Students experiment line-by-line here first.
// ---------------------------------------------
// document.getElementById("container").textContent = "OOOO< how does this work????"
// document.getElementById("container").innerHTML = "<b> OOOOO</b> , Will HTML work with this?"

// 🧩 STEP 1: Access the container

let container = document.getElementById("container");
// container = document.querySelector("#container"); // can use this also both lines have same purpose


// 🧩 STEP 2: Change container text content
container.textContent = "Yes, it works!"; //textContent doesn't recoginze HTML tags, will display them as is in output

container.innerHTML = "<b>Yes, it is working</b>"; // // innerHTML lets you use HTML tags inside it

// 🧩 STEP 3: Create and add a new paragraph

/*
1. Create the element, store inside a var
2. Customize/style the element
3. Attach it to a preferred place in document
*/
let para = document.createElement("p");
para.innerHTML = "1. Create the element, store inside a var <br> 2. Customize/style the element <br> 3. Attach it to a preferred place in document"
// Try call para in console at this point to make sure it displays the content
//Now add para to a place in document
container.appendChild(para);
// Add Style
para.style.color="red";
para.style.backgroundColor="yellow";

// How to add it directly to my document's body
document.body.appendChild(para); // Method 2 of adding elemmbt to the body

// 🧩 STEP 4: Update paragraph text





// 🧩 STEP 5: Add HTML formatting to paragraph





// 🧩 STEP 6: Style paragraph (color, background, font)





// 🧩 STEP 7: Use if–else logic to display “Passed / Failed”





// 🧩 STEP 8: Change entire page background or add a new heading

document.body.style.backgroundColor = "green";
// document.body.style = "background-color:yellow"; // Or can use this
;
// Create a h1 , add some text and add it to document;
let hello1 = document.createElement("h1");
hello1.innerHTML ="<b>This is a H1 heading</b>";
document.body.appendChild(hello1);



// ---------------------------------------------
// End of Direct DOM Manipulation
// ---------------------------------------------
