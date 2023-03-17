function updateClock(){
    var now = new Date();
    var dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear()

    Number.prototype.pad = function(digits){
        for(var n = this.toString();
        n.length < digits;
        n = 0 + n);
        return n;
    }

    var months = ["January", "February", 
    "March", "April", "May", "June", "July",
    "August", "September", "October", "November",
    "December"];

    var week = ["Sunday", "Monday", 
    "Tuesday", "Wednesday", "Thursday", 
    "Friday", "Saturday"];

    var ids = ["dayname", "month", 
    "daynum", "year", "hour", 
    "minutes", "seconds", "period"];

    var values = [week[dname], months[mo], dnum.pad(2), 
    yr];
    for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).
    firstChild.nodeValue = values[i];
}
function initClock(){
updateClock();
window.setInterval("updateClock()", 1);

} 