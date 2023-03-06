# 05 Third-Party APIs: Work Day Scheduler

# Description

Lavell's Work Day Calendar is a simple web application that allows users to create a schedule for their workday. The application displays the current date at the top of the page and provides time blocks for standard business hours. Each time block is color-coded to indicate whether it is in the past, present, or future.

Users can enter their events and save them using the "Save" button. The events are stored in local storage and persist even when the page is refreshed.
This application is useful for people who need to keep track of their daily schedules and want a simple way to do so. With its intuitive interface and easy-to-use functionality, the Work Day Calendar provides a great solution for anyone who wants to stay organized and on top of their daily tasks.

## How the Code Works

HTML

The HTML code defines the structure of Lavell’s Work Day Calendar and specifies the elements that the JavaScript code will interact with. By using data attributes such as data-time and data-index, the JavaScript code can easily identify the relevant elements and update their classes and values as needed.

Below is an outline of the code: 

DOCTYPE Declaration: This is the first line of the HTML code and it specifies the HTML version that the document uses.

HTML Element: The HTML element is the root element of an HTML document and it contains all the other HTML elements.

Head Element: This element contains metadata about the document such as the title of the document, links to external files such as stylesheets, and other information.

Meta Element: This element contains information about the document such as its character set and viewport information.

Link Element: This element specifies the external resources that should be used by the document such as stylesheets.

Title Element: This element specifies the title of the document which is displayed in the browser's title bar or tab.

Body Element: This element contains the content of the document that will be displayed in the browser.

Header Element: This element contains the header of the page which includes the title, a description, and the current day.

H1 Element: This element specifies the main heading of the page.
P Element: This element is used to display a short description of the page.

P Element: This element is used to display the current date.
Container Element: This element is used to contain the time blocks.

Row Elements: Each row element contains a time block, which consists of a time, description, and save button.

Time Element: This element displays the time of the current time block.
Textarea Element: This element allows the user to enter text for the current time block.

Button Element: This element saves the user input to local storage.

Script Elements: These elements include the links to external JavaScript libraries and the application-specific JavaScript code.

JQuery:

The JavaScript code uses the jQuery library and the dayjs library to dynamically color-code the time blocks of a work day calendar based on whether they are in the past, present, or future. It also allows the user to save events to local storage and retrieve them on page load, ensuring that the saved events persist even after the page is refreshed.

Below is a detailed breakdown of the code:


On page load, the script waits for the DOM to be ready by using the $(function () { ... }); syntax.

The script selects all elements with the time-block class using the jQuery selector $(".time-block") and stores them in a variable called $timeBlocks.

The current date is displayed at the top of the calendar by setting the text of the #currentDay element to the current date in the format "dddd, MMMM D, YYYY" using the dayjs().format("dddd, MMMM D, YYYY") method.

The current hour in 24-hour format is retrieved using the dayjs().hour() method and stored in a variable called currentHour.

A for loop is used to iterate through each of the time blocks in $timeBlocks.

For each time block, the hour value of the block is retrieved from the data-time attribute using the jQuery data() method and stored in a variable called hour.

Depending on whether the hour value is less than, equal to, or greater than the currentHour, the script adds the past, present, or future class to the time block using the jQuery addClass() method.

The script then retrieves any saved event for the current time block from local storage using the localStorage.getItem() method and stores it in a variable called savedEvent.

If savedEvent is not null, the script sets the value of the corresponding textarea element to savedEvent using the jQuery val() method.

A click event listener is added to each save button element with the saveBtn class using the jQuery on() method.
When the save button is clicked, the script retrieves the data-index attribute of the button using the jQuery data() method and stores it in a variable called index.

The script retrieves the value of the corresponding textarea element using the jQuery siblings() and val() methods and stores it in a variable called event.

The script saves the value of event to local storage using the localStorage.setItem() method with a key of event-${index}.

The saved events persist on page refresh because they are stored in local storage and are retrieved during the initialization of the calendar on page load.

## Deployed Site




## Your Task

Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Day.js](https://day.js.org/en/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Day.js in the browser.

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

<!-- @TODO: create ticket to review/update image) -->
![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/05-third-party-apis-homework-demo.gif)

## Grading Requirements

> **Note**: If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
>
> * A repository that has no code
>
> * A repository that includes a unique name but nothing else
>
> * A repository that includes only a README file but nothing else
>
> * A repository that only includes starter code

This Challenge is graded based on the following criteria:

### Technical Acceptance Criteria: 40%

* Satisfies all of the above acceptance criteria plus the following:

  * Uses a date utility library to work with date and time

### Deployment: 32%

* Application deployed at live URL

* Application loads with no errors

* Application GitHub URL submitted

* GitHub repo contains application code

### Application Quality: 15%

* Application user experience is intuitive and easy to navigate

* Application user interface style is clean and polished

* Application resembles the mock-up functionality provided in the Challenge instructions

### Repository Quality: 13%

* Repository has a unique name

* Repository follows best practices for file structure and naming conventions

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages

* Repository contains quality README file with description, screenshot, and link to deployed application

## Review

You are required to submit the following for review:

* The URL of the deployed application

* The URL of the GitHub repository, with a unique name and a README describing the project

- - -
© 2023 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
