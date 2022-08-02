var currentHour = moment().hours();
console.log(currentHour);

var update = function() {
    document.getElementById("currentDay")
    .textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
};
setInterval (update, 1000);

function hideText(){
    $("#localstrg-text").hide();
}

function showText(){
    $("#localstrg-text").show();
}

hideText();

$("button").on("click", function(){
    showText()
    setTimeout(hideText, 3000);
    var userText = $(this).siblings("textarea").val();
    var userTimeKey = parseInt($(this).parent().attr('id'), 10);
    localStorage.setItem(userTimeKey, userText);
});

function currentTimeEl() {
    $(".time-block").each(function() {
        var currentHourEl = parseInt($(this).attr('id'), 10);
        console.log(currentHourEl);
        if (currentHourEl < currentHour){
            console.log("past")
            $(this).children().eq(1).addClass("past");
        } else if (currentHourEl == currentHour){
            console.log("present")
            $(this).children().eq(1).removeClass('past');
            $(this).children().eq(1).removeClass('textarea');
            $(this).children().eq(1).addClass('present');
        } else {
            console.log("future")
            $(this).children().eq(1).removeClass('past');
            $(this).children().eq(1).removeClass('present');
            $(this).children().eq(1).addClass('future');
        }
        });
        
}
currentTimeEl();