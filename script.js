$(document).ready(function() {
    
    // save buttons for each hour
    var saveNine = $("#save9");
    var saveTen = $("#save10");
    var saveEleven = $("#save11");
    var saveTwelve = $("#save12");
    var saveOne = $("#save1");
    var saveTwo = $("#save2");
    var saveThree = $("#save3");
    var saveFour = $("#save4");
    var saveFive = $("#save5");

    // input fields (time blocks) for each hour
    var inputNine = $("#input9");
    var inputTen = $("#input10");
    var inputEleven = $("#input11");
    var inputTwelve = $("#input12");
    var inputOne = $("#input1");
    var inputTwo = $("#input2");
    var inputThree = $("#input3");
    var inputFour = $("#input4");
    var inputFive = $("#input5");


    // save input to local storage on click
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
    
    
    // display current date & time, & update time every second
   var updateTime = function() {
        $(".time-block").innerHTML = 
            $("#currentDay").text(moment().format("dddd" + ", " + "MMMM Do YYYY" + ", " + "h:mm a"));
    };
    setInterval(updateTime, 1000);

    updateTime();


    // set current hour to variable
    var currentHour = moment().hour();

    // set past, present, and future time slot colors
    if (currentHour === 9) {
        input9.classList.add("present")
    } else if (currentHour > 9) {
        input9.classList.add("past")
    } else if (currentHour < 9) {
        input9.classList.add("future");
    };

    if (currentHour === 10) {
        input10.classList.add("present")
    } else if (currentHour > 10) {
        input10.classList.add("past")
    } else if (currentHour < 10) {  
        input10.classList.add("future");
    };

    if (currentHour === 11) {
        input11.classList.add("present")
    } else if (currentHour > 11) {
        input11.classList.add("past")
    } else if (currentHour < 11) {  
        input11.classList.add("future");
    };

    if (currentHour === 12) {
        input12.classList.add("present")
    } else if (currentHour > 12) {
        input12.classList.add("past")
    } else if (currentHour < 12) {  
        input12.classList.add("future");
    };

    if (currentHour === 13) {
        input1.classList.add("present")
    } else if (currentHour > 13) {
        input1.classList.add("past")   
    } else if (currentHour < 13) {  
        input1.classList.add("future");
    };

    if (currentHour === 14) {
        input2.classList.add("present")
    } else if (currentHour > 14) {
        input2.classList.add("past")
    } else if (currentHour < 14) {  
        input2.classList.add("future");
    };

    if (currentHour === 15) {
        input3.classList.add("present")
    } else if (currentHour > 15) {
        input3.classList.add("past")
    } else if (currentHour < 15) {  
        input3.classList.add("future");
    };

    if (currentHour === 16) {
        input4.classList.add("present")
    } else if (currentHour > 16) {
        input4.classList.add("past")
    } else if (currentHour < 16) {  
        input4.classList.add("future");
    };

    if (currentHour === 17) {
        input5.classList.add("present")
    } else if (currentHour > 17) {
        input5.classList.add("past")                
    } else if (currentHour < 17) {  
        input5.classList.add("future");
    };

});