



//load the html and css files
$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function() {
        var textInput = $(this).siblings(".description").val();
        var timeInput = $(this).parent().attr('id');

        localStorage.setItem(textInput, timeInput);
    })
})



function logHours(){
    //retrieve the current hour from moment.js
    var currentTime = moment().hour();

    $(".time-block").each(function(){
        //split the id string and number
        var schedulerHours = parseInt($(this).attr("id").split("hr")[1]);
        //color code hour task description if time is in the past fill grey, if current time fill red, and if
//future fill green using provided css color classes
        if (schedulerHours < currentTime){
            $(this).addClass("past");
        }
        else if (schedulerHours === currentTime){
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })  
}
logHours();


