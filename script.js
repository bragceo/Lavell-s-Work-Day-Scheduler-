// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });

$(function () {
  const $timeBlocks = $(".time-block");
  const $currentDay = $("#currentDay");
  const currentHour = dayjs().hour(); // Get the current hour in 24-hour format

    // Initialize the page by setting the current date and checking for saved events
    $currentDay.text(dayjs().format("dddd, MMMM D, YYYY"));

    for (let i = 0; i < $timeBlocks.length; i++) {
      // Get the hour value of the current time-block
      const hour = $($timeBlocks[i]).data("time");

    // Apply the past, present, or future class to the time-block
  if (hour < currentHour) {
    $($timeBlocks[i]).addClass("past");
  } else if (hour === currentHour) {
    $($timeBlocks[i]).addClass("present");
  } else {
    $($timeBlocks[i]).addClass("future");
  }

    // Get the saved event for the current time-block from local storage and display it
  const savedEvent = localStorage.getItem(`event-${i}`);
  if (savedEvent) {
    $($timeBlocks[i]).find("textarea").val(savedEvent);
  }
}
  // Add a click event listener to the save button to save user input in local storage
  $(".saveBtn").on("click", function () {
    const index = $(this).data("index");
    const event = $(this).siblings(".description").val();

    localStorage.setItem(`event-${index}`, event);
  });
});

  