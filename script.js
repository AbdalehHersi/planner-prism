var today = moment();
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

showText();
