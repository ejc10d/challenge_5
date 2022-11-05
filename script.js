// Top of page date.
var rightNow = moment().format('dddd, MMM. DD, YYYY');
$("#currentDay").html(rightNow);

// Saves notes entered into field upon clicking the save button. 
// This section took me the longest to figure out because I didn't know about the sibling/parent notation until I did DEEP research.
$(function() {
    $(".saveBtn").on("click", function(){
        var notes = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, notes);
    })
// checks for current time and applies the css styling showing what time has past, what the current time is, and what time can still be scheduled throughout the day.
    function getTime(){
        var timeNow = moment().hour();

        $(".time-block").each(function() {
            // iterates this function over the array created from getTime. This is the one line that I was talking about in class that I found in research and we used in the last class. 
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(timeBlock);
            // applies a grey look for times past current time. 
            // Super glad I found the "this" way of doing this. At first I wrote each time block out. 
            if (timeBlock < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            // applies a red block for the current time.
            else if (timeBlock === timeNow) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else {
                // applies a green block for a time in the future.
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }
// pushes whatever is saved to the notes area to the html webpage in the proper area. I had to edit this area as well. I didnt realize it used a 24 hour clock.
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    getTime();
})
