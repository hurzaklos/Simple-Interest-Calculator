/*
  This function calculates the amount of money you would generate over the years and the rate you selected.
 */
function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal <= 0) {
        alert("Enter a non-zero or a positive number");
        document.getElementById("principal").focus();
    }else{
        document.getElementById("result").innerHTML = "If you deposit <mark>"
        + principal + "</mark>, <br/> at an interest rate of <mark>"
        + rate +"%.</mark><br/> You will receive an amount of <mark>" + amount +
        "</mark>,<br/>in the year <mark>" + year+ ".</mark><br/>";  
    }
     
}
/*
  This function shows and updates the % field near the scrolling bar
 */
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
/* 
 This function is used to check the amount inputted by the user to see if it is a positive 
 number, if it is a 0 or a negative number a popup will be prompted showing that they need to
 input a positive number in order to proceed. 
*/
function checkAmount() {
    var principal = document.getElementById("principal").value;
    if (principal <= 0) {
        alert("Enter a non-zero or a positive number");
        document.getElementById("principal").focus();
    }
}   
        