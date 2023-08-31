var today= new Date();
var day = today.getDate();
var month = today.getMonth();
var weekday = today.getDay();

function dateDisplay(){
    var datesuffix = getSuffix();
    
    var monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"]
    var monthTxt = monthlist[month];

    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var dayTxt = daylist[weekday];

    document.getElementById('dateTxt').textContent = dayTxt + ", " + day + datesuffix + "of " + monthTxt;
}

/*DATE SUFFIX*/
function getSuffix(){
    var lastNum = day % 10

    if(lastNum==1)
    {
        return "st "
    }
    else if(lastNum==2)
    {
        return "nd "
    }
    else if(lastNum==3)
    {
        return "rd "
    }
    else
    {
        return "th "
    }
}
