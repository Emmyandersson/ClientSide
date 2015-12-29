
function CalculateSwedishToDollarAndPound() {
    var swedish = document.getElementById('swedish').value;
    var dollar = swedish / 6;
    var pound = swedish / 12;

    document.getElementById('dollar').innerHTML = dollar;
    document.getElementById('pound').innerHTML = pound;
}