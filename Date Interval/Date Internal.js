function calculateDataDetails() {
    var fromDate = new Date(document.getElementById("fromDate").value);
    var toDate = new Date(document.getElementById("toDate").value);

    if (isNaN(fromDate) || isNaN(toDate)) 
    {
        alert("Please Select Valid Dates !")
        return;    
    }

    var TimeDiff = toDate.getTime() - fromDate.getTime();
    var DaysDiff = Math.ceil(TimeDiff / (1000 * 3600 * 24));
    var WeeksDiff = Math.ceil(DaysDiff / 7);
    var MonthsDiff = (toDate.getMonth() + 1) - (fromDate.getMonth() + 1) + (toDate.getFullYear() - fromDate.getFullYear()) * 12;
    var YearDiff = toDate.getFullYear() - fromDate.getFullYear();

    var result = document.getElementById("result");
    result.innerHTML = "Date Internal between" + "<br>";
    result.innerHTML += fromDate.toDateString() + " and " + toDate.toDateString() + "<hr><hr>"; 
    result.innerHTML += "In Years : " + YearDiff + "<br>";
    result.innerHTML += "In Months : " + MonthsDiff + "<br>";
    result.innerHTML += "In Weeks : " + WeeksDiff + "<br>";
    result.innerHTML += "In days : " + DaysDiff + "<hr><hr>";
    result.style.display = "block";
}