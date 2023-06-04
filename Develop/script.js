$(document).ready(function () {
  // Function to update the time block classes
  function updateColorCoding() {
    var currentTime = dayjs();

    $(".time-block").each(function () {
      var hour = parseInt($(this).attr("id").split("-")[1]);
      var timeBlockStart = dayjs().set("hour", hour).startOf("hour");
      var timeBlockEnd = dayjs().set("hour", hour).endOf("hour");

      $(this).removeClass("past present future");

      if (currentTime.isBefore(timeBlockStart)) {
        $(this).addClass("future");
      } else if (currentTime.isBetween(timeBlockStart, timeBlockEnd)) {
        $(this).addClass("present");
      } else {
        $(this).addClass("past");
      }
    });
  }

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
    var currentDate = dayjs().format('dddd, MMMM D, YYYY');
    $('#currentDate').text(currentDate);
  }
  
  $(document).ready(function() {
    updateCurrentDate();
  });

  // Update the time block classes every minute
  setInterval(updateColorCoding, 60000);

  // Initial update of time block classes
  updateColorCoding();

  // Update the current date in the header
  updateCurrentDate();
});