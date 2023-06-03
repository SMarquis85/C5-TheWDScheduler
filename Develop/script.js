$(document).ready(function () {
  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(hour, description);
  });

  // Apply the past, present, or future class to each time block
  $(".time-block").each(function () {
    var hour = parseInt($(this).attr("id"));
    var currentHour = parseInt(dayjs().format("H"));
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Get user input from local storage and set the textarea values
  $(".time-block").each(function () {
    var hour = $(this).attr("id");
    var description = localStorage.getItem(hour);
    $(this).find(".description").val(description);
  });

   // Display the current day and date
   $("#currentDay").text(dayjs().format("dddd"));
   $("#currentDate").text(dayjs().format("MMMM D, YYYY"));
 });
 
// Added to properly display current day
$(document).ready(function() {
  function updateCurrentDay() {
    var currentDay = dayjs().format("dddd");
    $("#currentDay").text(currentDay);
  }

  function updateCurrentDate() {
    var currentDate = dayjs().format("MMMM D, YYYY");
    $("#currentDate").text(currentDate);
  }

  updateCurrentDay();
  updateCurrentDate();

  setInterval(updateCurrentDay, 1000);
  setInterval(updateCurrentDate, 1000);
});