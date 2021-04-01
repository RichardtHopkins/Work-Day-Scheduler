
//gets the time formats it and adds it to the currentDay element
var dateElement = document.getElementById('currentDay');
var now = moment().format('dddd, MMMM Do');
dateElement.textContent = now;

//variable for the save buttons
var saveButton8 = $('#save-8');
var saveButton9 = $('#save-9');
var saveButton10 = $('#save-10');
var saveButton11 = $('#save-11');
var saveButton12 = $('#save-12');
var saveButton13 = $('#save-13');
var saveButton14 = $('#save-14');
var saveButton15 = $('#save-15');
var saveButton16 = $('#save-16');
var saveButton17 = $('#save-17');

function saveTextAreas(){

    var textArea8 = $('#text-8');
    var textArea9 = $('#text-9');
    var textArea10 = $('#text-10');
    var textArea11 = $('#text-11');
    var textArea12 = $('#text-12');
    var textArea13 = $('#text-13');
    var textArea14 = $('#text-14');
    var textArea15 = $('#text-15');
    var textArea16 = $('#text-16');
    var textArea17 = $('#text-17');

    console.log(textArea8.val);

    var textBlocks = {
        text8: textArea8.value,
        text9: textArea9.value,
        text10: textArea10.value,
        text11: textArea11.value,
        text12: textArea12.value,
        text13: textArea13.value,
        text14: textArea14.value,
        text15: textArea15.value,
        text16: textArea16.value,
        text17: textArea17.value
    };
    localStorage.setItem("textBlocks", JSON.stringify(textBlocks));
}



saveButton8.on("click", function (event){
    event.preventDefault();
    saveTextAreas();
    
});

// function showEvents() {
//     var hourlyEvents = JSON.parse(localStorage.getItem("textBlocks"));
//     if (hourlyEvents !== null) {
//     //   document.querySelector(".message").textContent = lastGrade.student + 
//     //   " received a/an " + lastGrade.grade
//     }

// }

//get the current time and apply changes to the text area style.
var timeLabel = ['8', '9' , '10' , '11' , '12', '13' , '14' , '15' , '16' , '17'] 
//gets the current hour and stores in the the currentHour variable.
var currentHour = moment().format('H');
//for loop to run through the timeLabel array.
for(var i =  0; i <= timeLabel.length -1; i++){
    //set lable number to the index of the time label array for the iteration of the for loop.
    var labelNum = timeLabel[i];
    //set another variable to be an integer version of the index of the time label array so we can perform conditional statments on it.
    var intlabel = parseInt(timeLabel[i]);
    //select the id of for the index number that we are on in the for loop so we can change the class of the text area html.
    var labelHour = $('#text-' + [labelNum]);
    //if it is the current hour change the text area to have the present class
    if(intlabel === currentHour){
       $(labelHour).addClass('present');
    //If the label number is less then the current hour change it to have the past class styling
    }else if(intlabel < currentHour){
        $(labelHour).addClass('past');
    //all other cases of lab
    }else{
        $(labelHour).addClass('future');
    }
}













