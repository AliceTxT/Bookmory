var countdownDate = new Date(localStorage.getItem("date")).getTime();



function checkDateValidity(){   

    datelength = document.getElementById("soonDateInput").value;

    if(datelength.length == 10){
        countdownSetDate();
    }
    else{
        document.getElementById("soonDateInput").value = "Invalid Date";
    }
}

function countdownSetDate(){
    localStorage.date = document.getElementById("soonDateInput").value;

    countdownDate = new Date(localStorage.date).getTime();

    countdownDateDisplay();

    document.getElementById("soonDateInput").value = "";

    console.log(localStorage.date.length);
}

function countdownDateDisplay(){
    document.getElementById("soonDate").innerHTML = localStorage.date;
}



var countdownfunction = setInterval(
function() {

    var now = new Date().getTime();
    var timeleft = countdownDate - now
    
    var days = Math.floor(timeleft/1000/60/60/24);
    var hour = Math.floor(timeleft/1000/60/60) - (days*24);
    var min = Math.floor(timeleft/1000/60) - (days*24*60) - (hour*60);
    var sec = Math.floor(timeleft/1000) - (days*24*60*60) - (hour*60*60) - (min*60);


    document.getElementById("soonCountdown").innerHTML = days+"d  "+hour+"h  "+min+"m  "+sec+"s  ";
}, 1000);

function countdownSetEvent(){
    eventUpper = document.getElementById("soonEventInput").value;

    localStorage.event = eventUpper.toUpperCase();

    countdownEventDisplay();

    document.getElementById("soonEventInput").value = "";
}

function countdownEventDisplay(){
    document.getElementById("soonTitle").innerHTML = localStorage.event;
}