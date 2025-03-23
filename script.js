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
	const grid = document.getElementById("grid");
    const rows = grid.getElementsByTagName("tr");

    // If no rows exist, create a new row first
    if (rows.length === 0) {
        addR();
        return;
    }

    // Add a cell to each row
    for (let i = 0; i < rows.length; i++) {
        const newCell = document.createElement("td");
        newCell.onclick = function() { this.style.backgroundColor = colorSelected; };
        rows[i].appendChild(newCell);
    }

    numCols++;
}

// Remove a row
function removeR() {
	const grid = document.getElementById("grid");
    const rows = grid.getElementsByTagName("tr");

    if (rows.length > 0) {
        grid.removeChild(rows[rows.length - 1]);
        numRows--;
    }

    // If no rows are left, reset columns to 0
    if (numRows === 0) {
        numCols = 0;
    }
}

// Remove a column
function removeC() {
	const grid = document.getElementById("grid");
    const rows = grid.getElementsByTagName("tr");

    if (numCols > 0) {
        for (let i = 0; i < rows.length; i++) {
            rows[i].removeChild(rows[i].lastElementChild);
        }
        numCols--;
    }

    // If no columns are left, reset rows to 0
    if (numCols === 0) {
        while (rows.length > 0) {
            grid.removeChild(rows[0]);
        }
        numRows = 0;
    }
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
