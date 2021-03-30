
//gets the time formats it and adds it to the currentDay element
var dateElement = document.getElementById('currentDay');
var now = moment().format('dddd, MMMM Do');
dateElement.textContent = now;




