/* Variables for the height & width inputs for the grid. Note to self: Their values should be taken inside the makeGrid() function otherwise the table is not drawn! */
let gridHeight, gridWidth;

// When size is submitted by the user, call makeGrid()

function makeGrid() {

    // Your code goes here!
    var table = document.getElementById("pixel_canvas");
    
    /* Deleting the previous drawing. Help from: https://www.daniweb.com/programming/web-development/threads/113340/delete-all-rows-from-table-in-javascript */
    var Parent = document.getElementById("pixel_canvas");
    while (Parent.hasChildNodes()) {
        Parent.removeChild(Parent.firstChild);
    }

    /* Values for height & width from the user inputs */
    gridHeight = document.getElementById("input_height").value;
    gridWidth = document.getElementById("input_width").value;

    for (let i = 0; i < gridHeight; i++) {
        let tableRow = table.insertRow(i);
        for (let j = 0; j < gridWidth; j++) {
            let tableColumn = tableRow.insertCell(j);

            tableColumn.addEventListener('click', function(event) {
          event.target.style.backgroundColor = document.getElementById("colorPicker").value;

                // this.style.borderColor="transparent"; 
                /* At first I liked the idea of cells not having border when clicked in order for the color to be homogenous inside the drawing. Then I changed my mind. I am leaving this here in case I want to use it in the future. */
            });
        }
    }
}
/* Check again: https://developer.mozilla.org/en-US/docs/Web/API/Event and */
document.getElementById("sizePicker").addEventListener("submit", function(event) {
    event.preventDefault();
    makeGrid();
});