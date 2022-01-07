

// Get current date 
function getCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do, h:mm:ss a');
    $("#currentDay").text(currentDate);
}

// Run Function to get current date and post it to the top
getCurrentDate();