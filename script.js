
$(document).ready(function() {
    
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
    $(saveNine).on("click", function() {
        localStorage.setItem(this.id, inputNine.val());        
    });
    inputNine.val(localStorage.getItem("save9"))
    

    $(saveTen).on("click", function() {
        localStorage.setItem(this.id, inputTen.val());        
    });
    inputTen.val(localStorage.getItem("save10"))


    $(saveEleven).on("click", function() {
        localStorage.setItem(this.id, inputEleven.val());        
    });
    inputEleven.val(localStorage.getItem("save11"))
    

    $(saveTwelve).on("click", function() {
        localStorage.setItem(this.id, inputTwelve.val());        
    });
    inputTwelve.val(localStorage.getItem("save12"))
    

    $(saveOne).on("click", function() {
        localStorage.setItem(this.id, inputOne.val());        
    });
    inputOne.val(localStorage.getItem("save1"))
    

    $(saveTwo).on("click", function() {
        localStorage.setItem(this.id, inputTwo.val());        
    });
    inputTwo.val(localStorage.getItem("save2"))
    

    $(saveThree).on("click", function() {
        localStorage.setItem(this.id, inputThree.val());        
    });
    inputThree.val(localStorage.getItem("save3"))
    

    $(saveFour).on("click", function() {
        localStorage.setItem(this.id, inputFour.val());        
    });
    inputFour.val(localStorage.getItem("save4"))
    

    $(saveFive).on("click", function() {
        localStorage.setItem(this.id, inputFive.val());        
    });
    inputFive.val(localStorage.getItem("save5"))
    
    
    // display current date & time
    
    // past, present, and future time slot colors
    
    
}); // end of code


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

*/
