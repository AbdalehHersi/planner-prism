            //
var currentHour = moment().hours(); //  recieve number to compare later
console.log("Current hour is " + currentHour);

var update = function() {
    document.getElementById("currentDay")
    .textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
};
setInterval (update, 1000);
    //Dynamicly updated time//

function hideText(){    //  functions to hide and show text
    $("#localstrg-text").hide();
}

function showText(){
    $("#localstrg-text").show();
}

hideText();

$("button").on("click", function(){
    showText()
    setTimeout(hideText, 3000); //  set timeout of 3 seconds
    var userText = $(this).siblings("textarea").val();  //  target the text area input
    var userTimeKey = parseInt($(this).parent().attr('id'), 10);    //  target the parent div with class row
    console.log("Usertext is " + userText,"UserTimeKey is " + userTimeKey);
    localStorage.setItem(userTimeKey, userText);    //  storing user inputs into local storage
});

function currentTimeEl() {
    $(".time-block").each(function() {
        var currentHourEl = parseInt($(this).attr('id'), 10);   //  return number
        console.log("Current hour element is " + currentHourEl);
        if (currentHourEl < currentHour){   //  compare current hour with each timeblock
            console.log("past")
            $(this).children().eq(1).addClass("past");  //  target textarea class
        } else if (currentHourEl == currentHour){
            console.log("present")
            $(this).children().eq(1).removeClass('past');   //  change class based on time
            $(this).children().eq(1).addClass('present');
        } else {
            console.log("future")
            $(this).children().eq(1).removeClass('past');
            $(this).children().eq(1).removeClass('present');
            $(this).children().eq(1).addClass('future');
        }
        });
        
};
currentTimeEl();    //  has to run before local storage update

$("#9 .textarea").val(localStorage.getItem("9"));   //  display the stored input from the saved button function in each textarea input
$("#10 .textarea").val(localStorage.getItem("10"));
$("#11 .textarea").val(localStorage.getItem("11"));
$("#12 .textarea").val(localStorage.getItem("12"));
$("#13 .textarea").val(localStorage.getItem("13"));
$("#14 .textarea").val(localStorage.getItem("14"));
$("#15 .textarea").val(localStorage.getItem("15"));
$("#16 .textarea").val(localStorage.getItem("16"));
$("#17 .textarea").val(localStorage.getItem("17"));
    //  gets rid of any unsaved text by displaying empty string