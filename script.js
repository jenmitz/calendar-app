/*

basics:
1. problem: create a day planner based on the standard 9-5 work day that has time slots (color-coded), 
    shows the current date, and saves the users input
2. inputs: text input, save button
3. outputs: current date, color-coded time slots, storing of input
4. functions: save input (button), keep input saved after refresh, color code based on time, check 
    current time to determine color-coding, show current date

steps: 
1. style and format (HTML/CSS)
2. declare necessary variables (save buttons and inputs for each time)
3. create save function that saves input to localStorage (button)
4. recognize current date based on time zone
5. determine whether each time slot is past, present, or future; color code accordingly

notes to self:
- save buttons need to listen for a click, then run the function saveInput
- saveInput (function) saves the input to localStorage
- each save button needs to only save the info for its corresponding time slot
- PREVENT DEFAULT? (don't delete on refresh?)

*/


// save buttons for each hour [working]
var saveNine = $("#save9");
var saveTen = $("#save10");
var saveEleven = $("#save11");
var saveTwelve = $("#save12");
var saveOne = $("#save1");
var saveTwo = $("#save2");
var saveThree = $("#save3");
var saveFour = $("#save4");
var saveFive = $("#save5");

// input fields (time blocks) for each hour [working]
var inputNine = $("#input9");
var inputTen = $("#input10");
var inputEleven = $("#input11");
var inputTwelve = $("#input12");
var inputOne = $("#input1");
var inputTwo = $("#input2");
var inputThree = $("#input3");
var inputFour = $("#input4");
var inputFive = $("#input5");


// save input to local storage on click [working]
function saveInput() {
    var saveIt = localStorage.getItem("save9");
    $(inputNine).val(saveIt);
};

$(saveNine).on("click", function() {
    localStorage.setItem($(this).val(), inputNine.val());
});

saveInput();



// retrieve input on reload/refresh [not working]
window.onload = function() {
    var nine = localStorage.getItem(inputNine);
    if (nine !== null)
        $("#input9").val(nine);
};


function retrieveInput () {
    var saved = localStorage.getItem("input9");
    if (saved) {
    	input9.innerHTML = saved;
    }
};
retrieveInput();



// display current date & time

// past, present, and future time slot colors


