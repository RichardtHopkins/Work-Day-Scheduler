
//gets the time formats it and adds it to the currentDay element
var dateElement = document.getElementById('currentDay');
var now = moment().format('dddd, MMMM Do');
dateElement.textContent = now;


//get the current time and apply changes to the text area style.
var timeLable = ['8', '9' , '10' , '11' , '12', '13' , '14' , '15' , '16' , '17'] 
var currentHour = moment().format('H');

for(var i =  0; i <= timeLable.length; i++){

    if(timeLable[i] === currentHour){

        $('label-'+ i).attr('class') = "present";

    }else if(timeLable[i] < currentHour){

        $('label-'+i).attr('class') = "past";

    }else{

        $('label-'+i).attr('class') = "future";

    }

}

//get the contents of the text areas.



// save the information that is in the text area when the save button is clicked.






