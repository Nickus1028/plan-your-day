// Get current date and apply it to the HTML element with ID currentDay using Moment

function getCurrentDateTime() {
    var currentDate = moment().format('dddd, MMMM Do, h:mm:ss a');
    $("#currentDay").text(currentDate);
}

// The array to store our information (id, time, and data)

var DayPlannerData = []

// Create array data
// Since schedule is from 9 to 5 we start at 9 and end at 17

for (time=9; time <=17; time++) {
    
    var id = time - 9;
    var plannerData = "";
    var displayHour = 0;
    var amORpm = "";  

    // Sets AM or PM and display time to adjust for 12 hour clock
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

    // Push data into our array
    DayPlannerData.push(plannerData)
}

// Function to display our data from local storage
function displayPlannerData() {
    var retrieveData = JSON.parse(localStorage.getItem("DayPlannerData"));
        
    if (retrieveData) {
        DayPlannerData = retrieveData;
    }
    
    for (i=0; i < DayPlannerData.length; i++) {
        $("#" + i).val(DayPlannerData[i].plannerData);
    }
    
}

// Create our planner HTML elements

for (i=0; i< DayPlannerData.length; i++) {
    
        //Create rows 
        var Row = $("<form>").addClass("row");
        $('.container').append(Row);
        
        // Create display time
        var plannerTime = $("<div>").addClass("col-md-1 hour").text(DayPlannerData[i].displayHour + " " + DayPlannerData[i].amORpm);
        
        // Create text form, based on current time of day apply different classes / css and apply id
        var plannerForm = $("<textarea>").addClass("col-md-10 description").attr("id", DayPlannerData[i].id)
        if (DayPlannerData[i].displayHour === moment().format("HH")) {
            plannerForm.addClass("present");
        } else if (DayPlannerData[i].displayHour < moment().format("HH")) {
            plannerForm.addClass("past");
        } else if (DayPlannerData[i].displayHour > moment().format("HH")) {
            plannerForm.addClass("future");
        }
        
        // Create save button HTML element
        var plannerButton = $("<button type=button>").addClass("col-md-1 saveBtn");
        var buttonIcon = $("<i class='far fa-save fa-lg'></i>");
        plannerButton.append(buttonIcon);
        
        // Adds time, form and save button to each row
       Row.append(plannerTime, plannerForm, plannerButton);
}

// Listen for our save button click, run functions to save to local storage.
$(".saveBtn").on("click", function(event) {
    
    // Finds the id in the current row by navigating DOM elements
    var saveIndex = $(this).parent().children(".description").attr("id"); 
   
    // Saves text in that HTML text area at that id
    text = $("#" + saveIndex).val();
    
    // Adds the text to our array at that index
    DayPlannerData[saveIndex].plannerData = text;

    // Save to local storage
    localStorage.setItem("DayPlannerData", JSON.stringify(DayPlannerData));

    // Function to display our saved planner data from local storage
    displayPlannerData();
})


// Function to get current date and time
getCurrentDateTime();

// Function to display our saved planner data from local storage
displayPlannerData();