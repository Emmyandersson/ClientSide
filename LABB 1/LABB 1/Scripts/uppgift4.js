
//Denna koden känns väldigt stökig. 
function CalculateSumAndAverage() {
    var numOne = document.getElementById('numOne').value;
    var numberOne = Number(numOne);
    var numTwo = document.getElementById('numTwo').value;
    var numberTwo = Number(numTwo);
    var numThree = document.getElementById('numThree').value;
    var numberThree = Number(numThree);
    var sum = document.getElementById('sum').innerHTML = numberOne + numberTwo + numberThree;
    document.getElementById('average').innerHTML = sum / 3;
}