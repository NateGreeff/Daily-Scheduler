
  // This will run the function when the page loads.
$(document).ready(function () {
  // This will save the data to local storage when the save button is clicked.
$(".saveBtn").on("click", function () {
  var time = $(this).parent().attr("id");
  var text = $(this).siblings(".description").val();
  localStorage.setItem(time, text);
}
);

  // This function will track the time and change the color of the time blocks
  // based on the current time.
function timeTracker() {
  var timeNow = dayjs().hour();

  // This will loop over each time block and compare the time to the current time.
  // If the time is less than the current time, the block will be gray.
  // If the time is equal to the current time, the block will be red.
  // If the time is greater than the current time, the block will be green.
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("-")[1]);

    if (blockTime < timeNow) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (blockTime === timeNow) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  })
}

// This will load the saved data from local storage.
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

// This will display the current date at the top of the page.
$("#currentDay").text(dayjs().format("dddd - MMMM D, YYYY"));

timeTracker();

});