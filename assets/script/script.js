// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// DONE - THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// The array to store our information (id, time, and data)
var DayPlannerData = []

// Get current date and apply it to the HTML element with ID currentDay using Moment

function getCurrentDateTime() {
    var currentDate = moment().format('dddd, MMMM Do, h:mm:ss a');
    $("#currentDay").text(currentDate);
}

// Create array for ID and element generation
// Since schedule is from 9 to 5 we start at 9 and end at 17

for (time=9; time <=17; time++) {
    
    var id = time - 9;
    var plannerData = "";
    var displayHour = 0;
    var amORpm = "";
    
    

    if (time === 12) {
        displayHour = 12;
        amORpm = "PM"
    } else if (time < 12) {
        displayHour = time;
        amORpm = "AM"
    } else if (time > 12) {
        displayHour = time - 12;
        amORpm = "PM"
    }
    // Converts hour to string to use in array 
    displayHour.toString();

    // Variable to store current values
    var plannerData = {
        id: id,
        displayHour: displayHour,
        time: time,
        amORpm: amORpm,
        plannerData: plannerData,
    }

    DayPlannerData.push(plannerData);
}

// Verify our array creation correctly
console.log(DayPlannerData);

function createDayPlanner() {

}





// Function to get current date 
getCurrentDateTime();

createDayPlanner();