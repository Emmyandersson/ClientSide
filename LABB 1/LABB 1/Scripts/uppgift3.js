function CalculateMinutesAndSeconds() {
    var hours = document.getElementById('hours').value;
    var minutes = hours * 60;
    var seconds = minutes * 60;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


}