    //displays current date and time
$("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));


    storeLocal();
//retrieve localStorage values for todays tasks descriptions
    function storeLocal(){
    $("#hours8, #text8").val(localStorage.getItem("8:00am"));
    $("#hours9, #text9").val(localStorage.getItem("9:00am"));
    $("#hours10, #text10").val(localStorage.getItem("10:00am"));
    $("#hours11, #text11").val(localStorage.getItem("11:00am"));
    $("#hours12, #text12").val(localStorage.getItem("12:00am"));
    $("#hours13, #text13").val(localStorage.getItem("1:00pm"));
    $("#hours14, #text14").val(localStorage.getItem("2:00pm"));
    $("#hours15, #text15").val(localStorage.getItem("3:00pm"));
    $("#hours16, #text16").val(localStorage.getItem("4:00pm"));
    $("#hours17, #text17").val(localStorage.getItem("5:00pm"));
}
   
//when button submit button is clicked for a given time it stores the values in localStorage
$("#btn8").click(function() {
        var time = document.getElementById("hour8").innerText;
        var descriptionText = document.getElementById("text8").value;
        localStorage.setItem(time, descriptionText);
    });

    $("#btn9").click(function() {
        var time = document.getElementById("hour9").innerText;
        var descriptionText = document.getElementById("text9").value;
        localStorage.setItem(time, descriptionText);
    });
    $("#btn10").click(function() {
        var time = document.getElementById("hour10").innerText;
        var descriptionText = document.getElementById("text10").value;
        localStorage.setItem(time, descriptionText);
    });
    $("#btn11").click(function() {
        var time = document.getElementById("hour11").innerText;
        var descriptionText = document.getElementById("text11").value;
        localStorage.setItem(time, descriptionText);
    });
    $("#btn12").click(function() {
        var time = document.getElementById("hour12").innerText;
        var descriptionText = document.getElementById("text12").value;
        localStorage.setItem(time, descriptionText);
    });
    $("#btn13").click(function() {
        var time = document.getElementById("hour13").innerText;
        var descriptionText = document.getElementById("text13").value;
        localStorage.setItem(time, descriptionText);
    });
    $("#btn14").click(function() {
        var time = document.getElementById("hour14").innerText;
        var descriptionText = document.getElementById("text14").value;
        localStorage.setItem(time, descriptionText);
    });
    $("#btn15").click(function() {
        var time = document.getElementById("hour15").innerText;
        var descriptionText = document.getElementById("text15").value;
        localStorage.setItem(time, descriptionText);
    });
    $("#btn16").click(function() {
        var time = document.getElementById("hour16").innerText;
        var descriptionText = document.getElementById("text16").value;
        localStorage.setItem(time, descriptionText);
    });
    $("#btn17").click(function() {
        var time = document.getElementById("hour17").innerText;
        var descriptionText = document.getElementById("text17").value;
        localStorage.setItem(time, descriptionText);
    });

    function logHours(){
        //retrieve the current hour from moment.js
        var currentTime = moment().hour();
    
        $(".time-block").each(function(){
            
            var schedulerHours = parseInt($(this).attr("id"));
            //color code hour task description if time is in the past fill grey, if current time fill red, and if
            //future fill green using provided css color classes
            if (schedulerHours < currentTime){
                $(this).addClass("past");
            }
            else if (schedulerHours === currentTime){
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).addClass("future");
            }
        });  
    }

    logHours();

