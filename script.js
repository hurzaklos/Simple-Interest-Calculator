/*
  The declared values are here in the compute function
  The computation for the result has also been declared to get the result for the recieved amount
  The years need to be modified and has been declaired to get the full year to compute it properly
 */
function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit <mark>"
   + principal + "</mark>, <br/> at an interest rate of <mark>"
   + rate +"%.</mark><br/> You will receive an amount of <mark>" + amount +
   "</mark>,<br/>in the year <mark>" + year+ ".</mark><br/>";   
}

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
        