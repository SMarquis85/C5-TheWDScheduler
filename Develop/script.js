$(document).ready(function() {
  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();
    localStorage.setItem(hour, description);
  });

  // Get user input from local storage and set the textarea values
  $(".time-block").each(function () {
    var hour = $(this).attr("id");
    var description = localStorage.getItem(hour);
    $(this).find(".description").val(description);
  });

  // Display the current day and date
  function updateCurrentDate() {
    var currentDay = dayjs().format("dddd");
    var currentDate = dayjs().format("MMMM D, YYYY");
    var currentDateTime = currentDay + ' ' + currentDate;
    $("#currentDate").text(currentDateTime);
  }

  updateCurrentDate();

  setInterval(updateCurrentDate, 1000);
});