// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
	const grid = document.getElementById("grid");
    const newRow = document.createElement("tr");

    // Add cells to the new row
    for (let i = 0; i < numCols; i++) {
        const newCell = document.createElement("td");
        newCell.onclick = function() { this.style.backgroundColor = colorSelected; };
        newRow.appendChild(newCell);
    }

    grid.appendChild(newRow);
    numRows++;
}

// Add a column
function addC() {
}

// Remove a row
function removeR() {
}

// Remove a column
function removeC() {
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
}

// Fill all cells
function fillAll(){
}

// Clear all cells
function clearAll(){
}
