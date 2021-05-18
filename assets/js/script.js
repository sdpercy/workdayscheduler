
//load the html and css files
$(document).ready(function() {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    $(".saveBtn").on("click", function() {
        var textInput = $(this).siblings(".description").val();
        var timeInput = $(this).parent().attr('id');

        localStorage.setItem(textInput, timeInput);
    })
})

