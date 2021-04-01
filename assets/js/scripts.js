
//gets the time formats it and adds it to the currentDay element
var dateElement = document.getElementById('currentDay');
var now = moment().format('dddd, MMMM Do');
dateElement.textContent = now;

//variable for the save buttons

var saveButton = $('.saveBtn');


//gets the text areas by id.
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


//save text to textBlocks object.
function saveTextAreas(){

    var textBlocks = {
        text8: textArea8.val(),
        text9: textArea9.val(),
        text10: textArea10.val(),
        text11: textArea11.val(),
        text12: textArea12.val(),
        text13: textArea13.val(),
        text14: textArea14.val(),
        text15: textArea15.val(),
        text16: textArea16.val(),
        text17: textArea17.val()
    };
    localStorage.setItem("textBlocks", JSON.stringify(textBlocks));
}


//save text areas to local storage.
saveButton.on("click", function (event){
    event.preventDefault();
    saveTextAreas();
});


//function to show events from local storage.
function showEvents() {
     var hourlyEvents = JSON.parse(localStorage.getItem("textBlocks"));
     if (hourlyEvents !== null) {
        document.getElementById("text-8").innerHTML = hourlyEvents.text8;
        document.getElementById("text-9").innerHTML = hourlyEvents.text9;
        document.getElementById("text-10").innerHTML = hourlyEvents.text10;
        document.getElementById("text-11").innerHTML = hourlyEvents.text11;
        document.getElementById("text-12").innerHTML = hourlyEvents.text12;
        document.getElementById("text-13").innerHTML = hourlyEvents.text13;
        document.getElementById("text-14").innerHTML = hourlyEvents.text14;
        document.getElementById("text-15").innerHTML = hourlyEvents.text15;
        document.getElementById("text-16").innerHTML = hourlyEvents.text16;
        document.getElementById("text-17").innerHTML = hourlyEvents.text17;
     }
};

//initiates the page on load.
function init(){
    showEvents();
};

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


init();











