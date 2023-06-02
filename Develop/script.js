$(function () {
  // Add a listener for click events on the save button
  $(".saveBtn").on("click", function () {
    // Get the hour from the parent time-block's id
    var hour = $(this).parent().attr("id");

    // Get the description from the textarea
    var description = $(this).siblings(".description").val();

    // Save the description in local storage using the hour as the key
    localStorage.setItem(hour, description);
  });

  // Apply the past, present, or future class to each time block
  $(".time-block").each(function () {
    // Get the hour from the time-block's id
    var hour = parseInt($(this).attr("id"));

    // Get the current hour using Day.js
    var currentHour = parseInt(dayjs().format("H"));

    // Compare the hour to the current hour and apply the appropriate class
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
    // Get the hour from the time-block's id
    var hour = $(this).attr("id");

    // Get the description from local storage using the hour as the key
    var description = localStorage.getItem(hour);

    // Set the textarea value to the description
    $(this).find(".description").val(description);
  });

  // Display the current date in the header of the page
  var currentDate = dayjs().format("DDDD, MMMM, YYYY");
  $("#currentDate").text(currentDate);
});


$(document).ready(function() { 
  var currentDateElement = $('#currentDate'); 

function updateCurrentDate() { 
  var currentDate = dayjs().format("dddd, MMMM, YYYY"); 
  currentDateElement.text(currentDate); 
}

updateCurrentDate(); 

setInterval(updateCurrentDate, 1000); 

});
