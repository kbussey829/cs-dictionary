// define necessary variables
const dictionaryDiv = document.getElementById("dictionary");

// start loop
const newTerm = document.createElement("p");
newTerm.setAttribute("data-level", "beginner"); // setting the level of the term - from db

// setting the text content (term name and definition) - from db
const titleText = document.createElement("strong");
titleText.textContent = "Term name: ";
const defText = document.createTextNode("Visible definition goes here");
newTerm.appendChild(titleText);
newTerm.appendChild(defText);

dictionaryDiv.appendChild(newTerm);
// repeat loop until all paragraphs have been created and appended (i.e. source file has been completely parsed)